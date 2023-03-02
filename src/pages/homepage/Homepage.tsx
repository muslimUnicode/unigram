import { useEffect, useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
import ModalWindow from "../../components/modal-window/ModalWindow"
import PostList from "../../components/post-list/PostList"
import SuggestionsBlock from "../../components/suggestions-block/SuggestionsBlock"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { getPosts } from "../../store/reducers/posts/postsAction"
import "./Homepage.scss"


const Homepage = () => {
    const dispatch = useAppDispatch()
    const { step } = useAppSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return(
        <div className="home-page">
            <NavBar/>
            <div className="main">
                <PostList/>
                <SuggestionsBlock/>
            </div>
            {step && <ModalWindow />}
        </div>
    )
}

export default Homepage