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

            profileImg:
                "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",

        };

        await insertUserBiodata(user.uid, data);
        return {
            status: "SUCCESS",

            data: data,
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
