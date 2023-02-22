import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie/cjs/Cookies";
import { IUser, userState } from "../../../types/IUser";
import { authorization } from "./usersAction";

const cookies = new Cookies()

const initialState: userState = {
    user: {
        _id: cookies.get("_id") || "",
        avatar: cookies.get("avatar") || "",
        token: cookies.get("token") || "",
        username: cookies.get("username") || "",
    },
    isLoading: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authorization.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(authorization.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
        });
    }
});

export default userSlice.reducer