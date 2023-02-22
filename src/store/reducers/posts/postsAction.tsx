import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/Api";

export const post = createAsyncThunk(
    "user/post",
    async function () {
        const res = await baseService.post("/posts", {
            description: "Добро пожаловать",
            image: File,
        })
        return res.data
    }
)