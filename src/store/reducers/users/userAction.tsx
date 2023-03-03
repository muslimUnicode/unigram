import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api"
import { IUser } from "../../../types/IUser";
import Cookies from "js-cookie";

export const authorization = createAsyncThunk(
    "user/authorization",
    async function (userData: {username: string, password: string}) {
        const res = await baseService.post<IUser>("/user/sign-in", userData)
        Cookies.set("token", res.data.token)      
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