import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../../../types/IUser";

const initialState: userState = {
    users: [],
    isLoading: false,
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {

    }
})

export default userSlice.reducer