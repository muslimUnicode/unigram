import "./PostList.scss"
import { useAppSelector } from "../../hooks/hooks"
import Post from "../post/Post"

const PostList = () => {
    const { posts } = useAppSelector(state => state.posts)
    
    return(
        <div className="post-list">
            {posts.map(post => (
                <Post post={post} key={post._id}/>
            ))}
        </div>
    )
}

export default PostList