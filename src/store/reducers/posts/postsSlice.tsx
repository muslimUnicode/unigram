import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost, PostsState } from "../../../types/IPost"
import { deletePosts, getPosts } from "./postsAction"

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isActiveModal: false
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        enableModal: (state) => {
            state.isActiveModal = true
        },
        disableModal: (state) => {
            state.isActiveModal = false
        }
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
        builder.addCase(deletePosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deletePosts.fulfilled, (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => post._id !== action.payload)
            state.isLoading = false
        })
    }
})

export default postSlice.reducer;

export const {enableModal, disableModal} = postSlice.actions