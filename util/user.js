import { databaseFirebase, storage } from "../config/firebase"
import { onValue, ref, set } from "firebase/database"

export const insertUserBiodata = async (id, userData) => {
    await set(ref(databaseFirebase, `user/${id}`), userData)
}

export const getUserBiodataById = (id) => {
    return new promise ((resolve, reject)=> {
        const dbRef = ref(databaseFirebase, `user/${id}`)
        onValue(dbRef, (data) => {
            resolve(data.val())
        })
    })
}