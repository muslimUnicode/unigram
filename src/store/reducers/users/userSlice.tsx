import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "../../../types/IUser";
import { authorization, getUser } from "./userAction";
import Cookies from "js-cookie";


const initialState: UserState = {
    user: {
        token: Cookies.get("token") || "",
        _id: "",
        avatar: "",
        username:  "",
    },
    isLoading: false,
    isAuth: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutReducer: (state) => {
            state.user.token = ""
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorization.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(authorization.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
            state.isAuth = true
        });
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user.username = action.payload.username
            state.user._id = action.payload._id
            state.user.avatar = action.payload.avatar
            state.isAuth = true
            state.isLoading = false
        })
        builder.addCase(getUser.rejected, (state) => {
            state.isLoading = false
        })
    }
});

export default userSlice.reducer

export const { logoutReducer } = userSlice.actions