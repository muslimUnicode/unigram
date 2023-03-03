import "./PostList.scss"
import { useAppSelector } from "../../hooks/hooks"
import Post from "../post/Post"

const PostList = () => {
    const { posts } = useAppSelector(state => state.posts)
    
    return(
        <div className="post-list">
            {posts.map(post => (
                <Post post={post}/>
            ))}
        </div>
    )
}

export default PostList