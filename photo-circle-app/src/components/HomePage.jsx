import { useMyEvents } from "../dataconnect-generated/react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase"
import CreateEventModal from "../input/CreateEventModal";

function HomePage() {
    const [user, authLoading] = useAuthState(auth);
    const {data, isLoading, refetch} = useMyEvents({ enabled: !!user });
    const navigate = useNavigate();

    if (authLoading || isLoading) return <p>Loading...</p>;
    if (!user) return <p>Login to see your events</p>;
  return (
    <div className="container-fluid mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>My Events</h1>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createEventModal">
                Create Event
            </button>
        </div>

        {data?.events.length === 0 && <p>No Events yet. Create an Event!</p>}
        <div className="row">
            {data?.events.map((event) => (
                <div className="col-md-4 mb-3" key={event.id} onClick={() => navigate(`event/${event.id}`)} style={{cursor: "pointer"}}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{event.name}</h5>
                            <p className="card-text">
                                <small className="text-muted">{event.eventDate}</small>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <CreateEventModal
            onSuccess={async () => {
                await refetch();
            }} />
    </div>
  )
}

export default HomePage