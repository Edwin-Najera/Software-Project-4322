import {
  useMyEvents,
  useDeleteEvent,
  useCreateUser,
  useMyJoinedEvents,
  useGetCurrentUser,
} from "../dataconnect-generated/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import CreateEventModal from "../input/CreateEventModal";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

function HomePage() {
  const [user, authLoading] = useAuthState(auth);
  const { mutate: createUser } = useCreateUser();
  const { data, isLoading, refetch } = useMyEvents({ enabled: !!user });
  const { data: currentUserData, isLoading: userLoading } = useGetCurrentUser({
    enabled: !!user,
  });
  const dcUserId = currentUserData?.users?.[0]?.id;
  const navigate = useNavigate();
  const { mutate: deleteEvent } = useDeleteEvent();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user || userLoading) return;

    // only create if user doesn't exist in Data Connect yet
    if (currentUserData?.users?.length === 0) {
      createUser({
        displayName: user.email.split("@")[0],
        email: user.email,
        firebaseUid: user.uid,
      });
    }
  }, [user, userLoading, currentUserData]);

  if (authLoading || isLoading) return <p>Loading...</p>;
  if (!user) return <p>Login to see your events</p>;

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      queryClient.clear();
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  function handleDelete(e, id) {
    e.stopPropagation();
    deleteEvent(
      { id: id },
      {
        onSuccess: () => {
          window.location.reload();
        },
        onError: (err) => console.error(err),
      },
    );
  }

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>My Events</h1>
        <small>{user.uid}</small>
        <div className="row w-50">
          <button
            className="btn btn-primary col me-3"
            data-bs-toggle="modal"
            data-bs-target="#createEventModal"
          >
            Create/Join Event
          </button>
          <button className="btn btn-danger col" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>

      {data?.events.length === 0 && <p>No Events yet. Create an Event!</p>}
      <div className="row">
        {data?.events.map((event) => (
          <div
            className="col-md-4 mb-3"
            key={event.id}
            onClick={() => navigate(`/event/${event.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="card-title">{event.name}</h5>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={(e) => handleDelete(e, event.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
                <p className="card-text">
                  <small className="text-muted">{event.eventDate}</small>
                  <br />
                  <small>{event.ownerId}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CreateEventModal
        dcUserId={dcUserId}
        onSuccess={async () => await refetch()}
      />
    </div>
  );
}

export default HomePage;
