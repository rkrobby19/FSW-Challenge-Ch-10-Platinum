import { configureStore } from "@reduxjs/toolkit";
import simonSlice from "../reducer/simon";

export const myStore = configureStore({
    reducer: {
        simonReducer: simonSlice.reducer,
    },
});
