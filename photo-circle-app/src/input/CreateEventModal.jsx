import { useState } from "react";
import CreateEventForm from "./CreateEventForm";
import JoinEventForm from "./JoinEventForm";

function CreateEventModal({ onSuccess }) {
  const [mode, setMode] = useState("create");

  return (
    <div
      className="modal fade"
      id="createEventModal"
      tabIndex="-1"
      aria-labelledby="createEventModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {mode === "create" ? "Create Event" : "Join Event"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex mb-3">
              <button
                className={`btn w-50 me-1 ${mode === "create" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setMode("create")}
              >
                Create
              </button>
              <button
                className={`btn w-50 ms-1 ${mode === "join" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setMode("join")}
              >
                Join
              </button>
            </div>
            {mode === "create" ? (
              <CreateEventForm onSuccess={onSuccess} />
            ) : (
              <JoinEventForm onSuccess={onSuccess} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEventModal;
