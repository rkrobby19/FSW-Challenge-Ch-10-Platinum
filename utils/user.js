import { storage } from "../config/firebase";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

// * Upload image to firebase storage
export const uploadProfileImage = async (id, file) => {
    const imgRef = storageRef(storage, `users/${id}/${file.name}`);
    const snapshot = await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
};
