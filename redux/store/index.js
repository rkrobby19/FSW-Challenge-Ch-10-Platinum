import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import simonSlice from "../reducer/simon";

const allReducers = combineReducers({
    simonReducer: simonSlice.reducer,
});

const myStore = configureStore({
    reducer: allReducers,
});

export default myStore;
