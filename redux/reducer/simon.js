import { createSlice } from "@reduxjs/toolkit";

const simonSlice = createSlice({
    name: "simon",
    initialState: {
        round: 0,
        level: 0,
        score: 0,
    },
    reducers: {
        increaseRound: (state) => {
            state.round = state.round + 1;
        },
        increaseLevel: (state) => {
            state.level = state.level + 1;
        },
        restartLevel: (state) => {
            state.level = 0;
        },
    },
});

export const simonAction = simonSlice.actions;
export default simonSlice;
