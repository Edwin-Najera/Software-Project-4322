import { useState } from "react";
import {
  useGetEventByCode,
  useJoinEvent,
} from "../dataconnect-generated/react";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min";

function JoinEventForm({ dcUserId, onSuccess }) {
  const [joinCode, setJoinCode] = useState("");
  const [eventId, setEventId] = useState(null);
  const [eventName, setEventName] = useState("");
  const [step, setStep] = useState("enter");
  const [error, setError] = useState("");
  const { mutate: joinEvent, isLoading } = useJoinEvent();

  async function handleLookup(e) {
    e.preventDefault();
    setError("");

    try {
      setStep("confirm");
    } catch (err) {
      setError("Event not found. Check the code and try again.");
    }
  }

  function handleJoin() {
    if (!eventId) return;

    joinEvent(
      { eventId, userId: dcUserId },
      {
        onSuccess: () => {
          setJoinCode("");
          setEventId(null);
          setStep("enter");
          const modal = Modal.getInstance(
            document.getElementById("createEventModal"),
          );
          modal?.hide();
          onSuccess?.();
        },
        onError: (err) => setError(err.message),
      },
    );
  }

  return (
    <div>
      <form onSubmit={handleLookup}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="joinCode"
            placeholder="Join Code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            required
          />
          <label htmlFor="joinCode">Event Join Code</label>
        </div>

        {error && <p className="text-danger">{error}</p>}
        <LookupAndJoin
          joinCode={joinCode}
          onFound={(id, name) => {
            setEventId(id);
            setEventName(name);
          }}
          onJoin={handleJoin}
          isLoading={isLoading}
        />
      </form>
    </div>
  );
}

function LookupAndJoin({ joinCode, onFound, onJoin, isPending }) {
  const { data, isLoading } = useGetEventByCode(
    { joinCode },
    { enabled: joinCode.length > 0 },
  );

  const event = data?.events?.[0];

  if (event) onFound(event.id, event.name);

  return (
    <>
      {isLoading && <p>Looking up for event...</p>}

      {event && (
        <div className="alert alert-success">
          <strong>{event.name}</strong> by {event.owner.displayName}
        </div>
      )}
      <button
        className="btn btn-primary w-100"
        type="button"
        onClick={onJoin}
        disabled={!event || isPending}
      >
        {isPending ? "Joining..." : "Join Event"}
      </button>
    </>
  );
}

export default JoinEventForm;
