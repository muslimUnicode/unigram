import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/Api"
import { IUser } from "../../../types/IUser";
import { cookies } from "../../../api/Api";

export const authorization = createAsyncThunk(
    "user/authorization",
    async function (userData: {username: string, password: string}) {
        const res = await baseService.post<IUser>("/user/sign-in", userData)
        cookies.set("token", res.data.token)      
        return res.data
    }
)

export const getUser = createAsyncThunk(
    "user/get",
    async function () {
        const res = await baseService.get<IUser>("/user")
        return res.data
    }
)