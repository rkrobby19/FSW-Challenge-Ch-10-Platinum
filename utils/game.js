import { databaseFirebase } from "../config/firebase";
import { onValue, ref, set } from "firebase/database";

const db = databaseFirebase;

// * Get score By Id
export const getScoreById = (id) => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, `score/${id}`);
        onValue(dbRef, (data) => {
            const value = data.val();
            resolve(value);
        });
    });
};
