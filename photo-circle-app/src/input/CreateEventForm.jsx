import { useCreateEvent } from "../dataconnect-generated/react";
import { useState } from "react";
import { Modal } from "bootstrap";

function CreateEventForm({ dcUserId, onSuccess }) {
  const { mutate: createEvent, isLoading, isError } = useCreateEvent();
  const [name, setName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [photoLimit, setPhotoLimit] = useState(100);

  function createJoinCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    await createEvent(
      {
        name,
        eventDate,
        photoLimit: parseInt(photoLimit),
        ownerId: dcUserId,
        joinCode: createJoinCode(),
      },
      {
        onSuccess: () => {
          setName("");
          setEventDate("");
          setPhotoLimit(100);
          const modal = Modal.getInstance(
            document.getElementById("createEventModal"),
          );
          modal?.hide();
          onSuccess?.();
        },
        onError: (err) => console.error(err),
      },
    );
  }

  return (
    <div className="container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="text"
            id="eventName"
            placeholder="Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="eventName">Event Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="date"
            id="eventDate"
            placeholder="Event Date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
          <label htmlFor="eventDate">Event Date</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="number"
            id="photoLimit"
            placeholder="Photo Limit"
            value={photoLimit}
            onChange={(e) => setPhotoLimit(e.target.value)}
            required
          />
          <label htmlFor="photoLimit">Photo Limit</label>
        </div>

        {isError && (
          <p className="text-danger">Failed to Create Event. Try Again</p>
        )}

        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}

export default CreateEventForm;
