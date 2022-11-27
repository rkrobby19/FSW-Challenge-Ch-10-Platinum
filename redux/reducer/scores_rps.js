import { createSlice } from "@reduxjs/toolkit"

const roundsSlice = createSlice({
    name: 'rounds',
    initialState: {
        1: {
            score: 0,
            result: ""
        },
        2: {
            score: 0,
            result: ""
        },
        3: {
            score: 0,
            result: ""
        },
        total: {
            score: 0,
            result: ""
        }

    },
    reducers: {
        addScore(state, action){
            if(action.payload.result == "DRAW"){
                state[action.payload.round].score = 10
                
            }else if(action.payload.result == "PLAYER WIN"){
                state[action.payload.round].score = 20
            }
        },
        addResult(state, action){
            state[action.payload.round].result = action.payload.result
        },
        calculateTotal(state, action){
            let count = 0
            for(let i = 1; i <= 3; i++){
                if(state[action.payload.round].result == "PLAYER WIN"){
                    count++
                }
            }
            if(count == 2 || count == 3){
                state.total.result = "PLAYER WIN"
            }else{
                state.total.result = "COM WIN"
            }
            state.total.score = state[1].score + state[2].score + state[3].score 
        }
    }

})

export const action = roundsSlice.actions
export default roundsSlice