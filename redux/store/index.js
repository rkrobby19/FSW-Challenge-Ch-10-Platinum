import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../reducer/loading";
import userSlice from "../reducer/user";
import roundsSlice from "../reducer/scores_rps";
import scoreSlice from "../reducer/scores";
import simonSlice from "../reducer/simon";

const allReducers = combineReducers({
    userReducer: userSlice.reducer,
    loadingReducer: loadingSlice.reducer,
    roundsReducer: roundsSlice.reducer,
    simonReducer: simonSlice.reducer,
    scoreReducer: scoreSlice.reducer,
});

const myStore = configureStore({
    reducer: allReducers,
});

export default myStore;
