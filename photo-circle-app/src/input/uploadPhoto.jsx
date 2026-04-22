import { useUploadPhoto } from "../dataconnect-generated/react"

function uploadPhoto() {
    const {mutate: uploadPhoto, isLoading} = useUploadPhoto();

    async function handleUpload(imageUrl) {
        uploadPhoto ({
            eventId,
            imageUrl,
            caption: "My Photo"
        })
    }
  return (
    <div>uploadPhoto</div>
  )
}

export default uploadPhoto