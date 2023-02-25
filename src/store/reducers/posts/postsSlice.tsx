import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost, postsState } from "../../../types/IPost"
import { getPosts } from "./postsAction"

const initialState: postsState = {
    posts: [],
    isLoading: false,
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
            state.isLoading = false
        })
    }
})

export default postSlice.reducer;