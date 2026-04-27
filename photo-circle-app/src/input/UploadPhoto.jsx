import { useUploadPhoto } from "../dataconnect-generated/react";
import { Modal } from "bootstrap";
import { useState } from "react";
import { uploadPhotoToStorage } from "../firebase/uploadPhotoToStorage";

function UploadPhoto({ dcUserId, eventId, onSuccess }) {
  const { mutate: uploadPhoto, isLoading, isError } = useUploadPhoto();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;
    setError("");
    setUploading(true);

    try {
      const imageUrl = await uploadPhotoToStorage(file, eventId, setProgress);
      uploadPhoto(
        { eventId, imageUrl, uploaderId: dcUserId },
        {
          onSuccess: () => {
            setFile(null);
            setProgress(0);
            setUploading(false);
            const modal = Modal.getInstance(
              document.getElementById("createEventModal"),
            );
            modal?.hide();
            onSuccess?.();
          },
          onError: (err) => {
            setError(err.message);
            setUploading(false);
          },
        },
      );
    } catch (err) {
      setError(err.message);
      setUploading(false);
    }
  }
  return (
    <form onSubmit={handleUpload}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*, .heic, .heif"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <label htmlFor="imageUrl">Image URL</label>
      </div>

      {file && (
        <div className="mb-3">
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="img-fluid rounded"
            style={{ maxHeight: "200px", objectFit: "cover" }}
          />
        </div>
      )}

      {uploading && (
        <div className="mb-3">
          <div className="progress">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        </div>
      )}

      {isError && (
        <p className="text-danger">Failed to Create Event. Try Again</p>
      )}
      {error && <p className="text-danger">{error}</p>}

      <button
        className="btn btn-primary w-100"
        type="submit"
        disabled={isLoading}
      >
        {uploading ? `Uploading ${progress}%...` : "Upload Photo"}
      </button>
    </form>
  );
}

export default UploadPhoto;
