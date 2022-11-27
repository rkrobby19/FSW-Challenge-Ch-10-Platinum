import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { authFirebase } from "../config/firebase";
import { insertUserBiodata } from "./user";

export const firebaseRegister = async (fullname, username, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            authFirebase,
            email,
            password
        );
        const user = userCredential.user;
        localStorage.setItem("jwt-token", user.accessToken);
        // insert to database

        const data = {
            fullname: fullname,
            username: username,
            email: email,
            password: password,
        };

        await insertUserBiodata(user.uid, data);
        return {
            status: "SUCCESS",
            data: {
                uid: user.uid,
                fullname: fullname,
                username: username,
                email: email,
                password: password,
                profileUrl: null,
            },
        };
    } catch (error) {
        //do something
        return {
            status: "ERROR",
            message: error.message,
        };
    }
};

export const firebaseLogin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            authFirebase,
            email,
            password
        );
        const user = userCredential.user;
        localStorage.setItem("jwt-token", user.accessToken);
        return {
            status: "SUCCESS",
        };
    } catch (error) {
        return {
            status: "ERROR",
            message: error.message,
        };
    }
};
