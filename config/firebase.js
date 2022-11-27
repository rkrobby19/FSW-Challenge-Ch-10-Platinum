import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MSG_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authFirebase = getAuth(app);
export const databaseFirebase = getDatabase(app);
export const storage = getStorage(app);
