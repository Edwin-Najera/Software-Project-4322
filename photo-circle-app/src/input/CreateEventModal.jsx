import CreateEventForm from "./CreateEventForm"

function CreateEventModal({ onSuccess }) {
  return (
    <div className="modal fade" id="createEventModal" tabIndex="-1" aria-labelledby="createEventModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="createEventModalLabel">Create Event</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <CreateEventForm onSuccess={onSuccess} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateEventModal