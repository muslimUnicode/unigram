import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/Api"
import Cookies from 'universal-cookie';
import { IUser } from "../../../types/IUser";

export const authorization = createAsyncThunk(
    "user/authorization",
    async function (userData: {username: string, password: string}, ) {
        const res = await baseService.post<IUser>("/user/sign-in", userData)
        const cookies = new Cookies();
        cookies.set("_id", res.data._id)
        cookies.set("avatar", res.data.avatar)
        cookies.set("token", res.data.token)
        cookies.set("username", res.data.username)        
        return res.data
    }
)