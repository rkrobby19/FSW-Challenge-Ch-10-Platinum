import { databaseFirebase, storage } from "../config/firebase"
import { onValue, ref, set } from "firebase/database"
import { useSelector } from "react-redux"

// const scoreData = useSelector((state) => {
//     return state.scoreReducer
// })

export const insertUserScore = async (id, score) => {
    await set(ref(databaseFirebase, `score/${id}`), { dummy: score.dummy, rps: score.rps, simon: score.simon })

}

export const getScoreById = (id) => {
    return new Promise ((resolve, reject)=> {
        const dbRef = ref(databaseFirebase, `score/${id}`)
        onValue(dbRef, (data) => {
            const scoreData = data.val()
            resolve(scoreData)
        })
    })
}