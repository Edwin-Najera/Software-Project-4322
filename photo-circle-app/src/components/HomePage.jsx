import { useMyEvents } from "../dataconnect-generated/react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase/firebase"


function HomePage() {
    const [user, loading] = useAuthState(auth);
    const {data, isLoading, isError} = useMyEvents({ enabled: !!user });

    if (loading || isLoading) return <p>Loading...</p>;
    if (!user) return <p>Login to see your events</p>;
    if (isError) return <p>Failed to Load Events</p>;
  return (
    <div>
        <h1>My Events</h1>
        {data?.events.length === 0 && <p>You have no events...</p>}
        <div>
            {data?.events.map((event) => (
                <div key={event.id}>
                    <h2>{event.name}</h2>
                    <p>P{event.eventDate}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage