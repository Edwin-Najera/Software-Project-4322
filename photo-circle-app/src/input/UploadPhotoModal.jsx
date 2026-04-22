import UploadPhoto from "./UploadPhoto"

function UploadPhotoModal({eventId, onSuccess}) {
  return (
    <div className="modal fade" id="uploadPhotoModal" tabIndex="-1" aria-labelledby="uploadPhotoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="uploadPhotoModalLabel">Upload Photo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <UploadPhoto eventId={eventId} onSuccess={onSuccess} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UploadPhotoModal