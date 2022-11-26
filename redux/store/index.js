import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducer/user";

const allReducers = combineReducers({
    userReducer: userSlice.reducer
})

const myStore = configureStore({
    reducer: allReducers
})

export default myStore