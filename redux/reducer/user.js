import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBiodataById } from "../../util/user";
import { getUserById } from "../../utils/user";

export const retrieveUserById = createAsyncThunk(
    "user/retrieveUserById",
    async (id) => {
        const resp = await getBiodataById(id);
        console.log(resp);
        const data = {
            uid: id,
            fullname: resp.fullname,
            username: resp.username,
            email: resp.email,
            profileImg: resp.profileImg,
        };
        return data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        uid: null,
        fullname: null,
        username: null,
        email: null,
        profileImg: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveUserById.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

export const userAction = userSlice.actions;
export default userSlice;
