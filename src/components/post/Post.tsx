import { FC, useState } from "react"
import { useAppDispatch } from "../../hooks/hooks"
import { IPost } from "../../types/IPost"
import { setStep } from "../../store/reducers/posts/postsSlice"
import { deletePost } from "../../store/reducers/posts/postsAction"
import optionsIcon from "../../assets/options.svg"
import saveIcon from "../../assets/save.svg"
import likeIcon from "../../assets/like.svg"
import commentsIcon from "../../assets/comments.svg"
import shareIcon from "../../assets/share.svg"
import addAComment from "../../assets/add-a-comment.svg"
import "./Post.scss"

const Post: FC<{post: IPost}> = ({post}) => {
    const [options, setOptions] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const deletePosts = (_id: string) => {
        dispatch(deletePost(_id))
    }

    const changeOptions = () => {
       setOptions(!options)
    }
    
    return(
        <div className="post">
            <div className="upper">
                <div className="post-user">
                    <img src={post.user.avatar} alt=""/>
                    <span>{post.user.username}</span>
                </div>
                <div className="options"><img src={optionsIcon} alt="" onClick={() => changeOptions()}/></div>
            </div>
            <img src={post.image} alt=""/>
            <div className="lower">
                <div className="buttons">
                    <div className="left">
                        <img src={likeIcon} alt=""/>
                        <img src={commentsIcon} alt=""/>
                        <img src={shareIcon} alt=""/>
                    </div>
                    <div className="right"><img src={saveIcon} alt="" /></div>
                </div>
                <div className="likes">{post.likes.length} likes</div>
                <div className="description">
                    <span className="username">{post.user.username}</span>
                    <span className="username-comment">{post.description.slice(0, 150)}</span>
                </div>
                <div className="all-comments">See {post.comments.length} comments</div>
                <div className="created-at">{post.created_at}</div>
            </div>
            <div className="add-a-comment">
                <img src={addAComment} alt=""/>
                <input type="text" placeholder="Add a comment"/>
                <span className="post-button">Post</span>
            </div>
            {
            options &&
            <div className="options-buttons">
                <div className="edit" onClick={() => dispatch(setStep(2))}>Edit</div>
                <div className="delete" onClick={() => deletePosts(post._id)}>Delete</div>
            </div>
            }
        </div>
    )
}

export default Post