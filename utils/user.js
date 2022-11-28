import { databaseFirebase, storage } from "../config/firebase";
import { ref, update } from "firebase/database";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

const db = databaseFirebase;

// * Get userdata By Id
export const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, `user/${id}`);
        onValue(dbRef, (data) => {
            const value = data.val();
            resolve(value);
        });
    });
};

// * Update user data by Id
export const updateUserById = (id, data, url) => {
    const dbRef = ref(db, `user/${id}`);
    let updateData = {};
    if (url) {
        updateData = {
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            profileImg: url,
        };
    } else {
        updateData = {
            fullname: data.fullname,
            username: data.username,
            email: data.email,
        };
    }

    update(dbRef, updateData)
        .then(() => {
            return console.log(`Data updated`);
        })
        .catch((error) => {
            console.log(error);
            return console.log(`Data update failed`);
        });
};

// * Upload image to firebase storage
export const uploadProfileImage = async (id, file) => {
    const imgRef = storageRef(storage, `users/${id}/${file.name}`);
    const snapshot = await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
};
