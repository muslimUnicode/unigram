import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/Api";
import { IPost } from "../../../types/IPost";

export const getPosts = createAsyncThunk(
    "posts/get",
    async function () {
        const res = await baseService.get<IPost[]>("/posts")
        return res.data
    }
)