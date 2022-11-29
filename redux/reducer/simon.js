import { createSlice } from "@reduxjs/toolkit";

const simonSlice = createSlice({
    name: "simon",
    initialState: {
        level: 0,
        score: 0,
    },
    reducers: {
        increaseLevel: (state) => {
            state.level = state.level + 1;
        },
        restartLevel: (state) => {
            state.level = 0;
        },
        addScore: (state) => {
            state.score = state.score + state.level * 10;
        },
        restartScore: (state) => {
            state.score = 0;
        }
    },
});

export const simonAction = simonSlice.actions;
export default simonSlice;
