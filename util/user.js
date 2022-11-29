import { databaseFirebase } from "../config/firebase";
import { onValue, ref, set } from "firebase/database";

export const insertUserBiodata = async (id, userData) => {
    await set(ref(databaseFirebase, `user/${id}`), userData);
};

export const getUserBiodataById = (id) => {
    return new promise((resolve, reject) => {
        const dbRef = ref(databaseFirebase, `user/${id}`);
        onValue(dbRef, (data) => {
            const value = data.val();
            resolve(value);
        });
    });
};

//READ BIODATA BY ID
export const getBiodataById = (id) => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(databaseFirebase, `user/${id}`);
        onValue(dbRef, (data) => {
            const value = data.val();
            resolve(value);
        });
    });
};
