import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getScoreById } from "../../util/scores";

export const retrieveScoreById = createAsyncThunk(
    "score/retrieveScoreById",
    async (id) => {
        const resp = await getScoreById(id);
        const data = {
            dummy: resp.dummy == undefined ? null : resp.dummy,
            rps: resp.rps == undefined ? null : resp.rps,
            simon: resp.simon == undefined ? null : resp.simon
        };
        console.log(data);
        return data;
    }
);

const scoreSlice = createSlice({
    name: "score",
    initialState: {
        dummy: null,
        rps: null,
        simon: null
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
