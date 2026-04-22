import { storage, auth } from "./firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export function uploadPhotoToStorage(file, eventId, onProgress) {
    return new Promise((resolve, reject) => {
        const storageRef = ref(
            storage,
            `events/${eventId}/${auth.currentUser.uid}_${Date.now()}_${file.name}`
        );

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                onProgress?.(pct);
            },
            (err) => reject(err),
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(url);
            }
        );
    })
}