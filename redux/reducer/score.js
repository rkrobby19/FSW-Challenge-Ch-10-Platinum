import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getScoreById } from "../../utils/game";

export const retrieveScoreById = createAsyncThunk(
    "score/retrieveScoreById",
    async (id) => {
        const resp = await getScoreById(id);
        console.log(resp);
        const data = {
            rps: resp.rps,
            simon: resp.simon,
            dummy: resp.dummy,
        };
        return data;
    }
);

const scoreSlice = createSlice({
    name: "score",
    initialState: {
        rps: null,
        simon: null,
        dummy: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveScoreById.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

export const scoreAction = scoreSlice.actions;
export default scoreSlice;
