import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../reducer/loading";
import userSlice from "../reducer/user";
import roundsSlice from "../reducer/scores_rps";

const allReducers = combineReducers({
    userReducer: userSlice.reducer,
    loadingReducer: loadingSlice.reducer
     roundsReducer: roundsSlice.reducer

})

const myStore = configureStore({
    reducer: allReducers
})

export default myStore