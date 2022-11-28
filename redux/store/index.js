import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../reducer/loading";
import userSlice from "../reducer/user";
import roundsSlice from "../reducer/scores_rps";
import scoreSlice from "../reducer/scores";

const allReducers = combineReducers({
    userReducer: userSlice.reducer,
    loadingReducer: loadingSlice.reducer,
    roundsReducer: roundsSlice.reducer,
    scoreReducer: scoreSlice.reducer
});

const myStore = configureStore({
    reducer: allReducers,
});

export default myStore;
