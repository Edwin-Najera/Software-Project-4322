import { useParams, useNavigate } from "react-router-dom";
import { useMyPhotos, useGetCurrentUser } from "../dataconnect-generated/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import UploadPhotoModal from "../input/UploadPhotoModal";

function EventPage() {
  const { eventId, joinCode } = useParams();
  const navigate = useNavigate();
  const [user, authLoading] = useAuthState(auth);
  const { data, isLoading, isError, refetch } = useMyPhotos({
    enabled: !!user,
  });
  const { data: currentUserData } = useGetCurrentUser(
    { firebaseUid: user?.uid ?? "" },
    { enabled: !!user },
  );
  const dcUserId = currentUserData?.users?.[0]?.id;

  if (authLoading || isLoading) return <p>Loading...</p>;

  const photos = data?.photos.filter((p) => p.event.id === eventId) ?? [];

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <small>{eventId}</small>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#uploadPhotoModal"
        >
          + Add Photo
        </button>
      </div>

      {photos.length === 0 && <p>No photos yet. Add some!</p>}
      <div className="row">
        {photos.map((photo) => (
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
        onSuccess={async () => await refetch()}
      />
    </div>
  );
}

export default EventPage;
