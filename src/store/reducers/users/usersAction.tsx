import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/Api"

export const authorization = createAsyncThunk(
    "user/authorization",
    async function (userData: {username: string, password: string}) {
        const res = await baseService.post("/user/sign-in", {
            username: userData.username,
            password: userData.password,
        })
        console.log(res)
        return res
    }
)