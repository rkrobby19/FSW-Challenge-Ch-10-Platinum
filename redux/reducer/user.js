import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserBiodataById } from "../../util/user";

export const retrieveUserById = createAsyncThunk(
    'user/retrieveUserById',
    async (id) => {
        // to do
        const resp = await getUserBiodataById(id)
        console.log(resp)
        const data = {
            uid: id,
            fullname: resp.fullname,
            username: resp.username,
            email: resp.email,
            profileUrl: resp.profileUrl
        }

        return data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: null,
        fullname: null,
        username: null,
        email: null,
        profileUrl: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveUserById.fulfilled, (state, action) =>{
            state = action.payload
            return state
        })
    }
})

export const userAction = userSlice.actions
export default userSlice