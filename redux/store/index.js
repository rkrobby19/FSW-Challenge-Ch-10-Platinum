import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import roundsSlice from "../reducer/scores_rps";

const allReducers = combineReducers({
    roundsReducer: roundsSlice.reducer
})

const myStore = configureStore({
    reducer: allReducers
})

export default myStore