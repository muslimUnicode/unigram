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

// export const postPosts = createAsyncThunk(
//     "posts/post",
//     async function (postData) {

//         const fd = new FormData()

//         fd.append("img", postData.file)

//         const res = await baseService.post<IPost>("/posts")
//         return res.data
//     }
// )

export const deletePosts = createAsyncThunk(
    "posts/delete",
    async function (_id: string) {
        await baseService.delete<string>(`/posts/${_id}`)
        return _id
    }
)