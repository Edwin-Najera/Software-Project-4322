import { useParams, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import {
  useMyPhotos,
  useEventPhotos,
  useGetCurrentUser,
  useGetEvent,
} from "../dataconnect-generated/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import UploadPhotoModal from "../input/UploadPhotoModal";

function EventPage() {
  const { eventId } = useParams();
  const { data: eventData } = useGetEvent(
    { id: eventId },
    { enabled: !!eventId },
  );
  const joinCode = eventData?.events?.[0]?.joinCode;
  const navigate = useNavigate();
  const [user, authLoading] = useAuthState(auth);
  const {
    data: myPhotosData,
    isLoading,
    isError,
    refetch,
  } = useMyPhotos({
    enabled: !!user,
  });
  const {
    data: eventPhotosData,
    isLoading: eventPhotosLoading,
    isError: eventPhotosError,
    refetch: refetchEventPhotos,
  } = useEventPhotos({ eventId }, { enabled: !!eventId });
  const { data: currentUserData } = useGetCurrentUser(
    { firebaseUid: user?.uid ?? "" },
    { enabled: !!user },
  );
  const dcUserId = currentUserData?.users?.[0]?.id;

  if (authLoading || isLoading) return <p>Loading...</p>;

  const myPhotos =
    myPhotosData?.photos.filter((p) => p.uploaderId === dcUserId) ?? [];

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#uploadPhotoModal"
        >
          + Add Photo
        </button>
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#joinCode"
        >
          View Join Code
        </button>
      </div>

      {eventPhotosData?.photos?.length === 0 && <p>No photos yet. Add some!</p>}
      <div className="row">
        {eventPhotosData?.photos?.map((photo) => (
          <div className="col-md-4 mb-3" key={photo.id}>
            <div className="card">
              <img
                src={photo.imageUrl}
                alt={photo.caption}
                className="card-img card-image"
              />
            </div>
          </div>
        ))}
      </div>

      <UploadPhotoModal
        eventId={eventId}
        dcUserId={dcUserId}
        onSuccess={() => {
          refetch();
          setTimeout(() => window.location.reload(), 2000);
        }}
      />
      <div
        className="modal fade"
        id="joinCode"
        tabIndex="-1"
        aria-labelledby="joinCodeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="joinCodeLabel">
                Join Code
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                The join code for this event is: <br />
                {joinCode}
              </p>
              <QRCodeSVG
                value={`https://picnestapp.vercel.app/event/${eventId}?join=${joinCode}`}
                size={128}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
