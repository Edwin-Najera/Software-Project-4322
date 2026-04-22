import { useMyEvents } from "../dataconnect-generated/react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase/firebase"
import { useState } from "react";
import CreateEventForm from "../input/CreateEventForm";

function HomePage() {
    const [user, authLoading] = useAuthState(auth);
    const {data, isLoading, refetch} = useMyEvents({ enabled: !!user });
    const [showForm, setShowForm] = useState(false);

    if (authLoading || isLoading) return <p>Loading...</p>;
    if (!user) return <p>Login to see your events</p>;
  return (
    <div className="container-fluid mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>My Events</h1>
            <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cancel" : "Create Event"}
            </button>
        </div>
        {showForm && (
            <CreateEventForm
            onSuccess={async () => {
                setShowForm(false);
                await refetch();
            }} />
        )}

        {data?.events.length === 0 && <p>No Events yet. Create an Event!</p>}
        <div className="row">
            {data?.events.map((event) => (
                <div className="col-md-4 mb-3" key={event.id}>
                    <div className="card">
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
    </div>
  )
}

export default HomePage