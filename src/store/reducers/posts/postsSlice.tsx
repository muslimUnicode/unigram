import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost, PostsState } from "../../../types/IPost"
import { deletePost, getPosts } from "./postsAction"

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    step: 0,
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
            state.isLoading = false
        })
        // builder.addCase(postPosts.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(postPosts.fulfilled, (state, action: PayloadAction<IPost>) => {
        //     state.posts.push(action.payload)
        //     state.isLoading = false
        // })
        builder.addCase(deletePost.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => post._id !== action.payload)
            state.isLoading = false
        })
    }
})

export default postSlice.reducer;

export const { setStep } = postSlice.actions