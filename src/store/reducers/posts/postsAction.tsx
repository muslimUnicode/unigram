import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "../../../api/api";
import { IPost } from "../../../types/IPost";

export const getPosts = createAsyncThunk(
    "posts/get",
    async function () {
        const res = await baseService.get<IPost[]>("/posts")
        return res.data
    }
)

export const postPost = createAsyncThunk(
    "posts/post",
    async function (postData: {imageFile: File | null, description: string}) {
        const fd = new FormData()

        fd.append("image", postData.imageFile!)
        fd.append("description", postData.description)

        const res = await baseService.post<IPost>("/posts", fd)
        return res.data
    }
)

export const deletePost = createAsyncThunk(
    "posts/delete",
    async function (_id: string) {
        await baseService.delete<string>(`/posts/${_id}`)
        return _id
    }
)