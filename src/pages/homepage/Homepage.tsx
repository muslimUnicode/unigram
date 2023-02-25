import Header from "../../components/header/NavBar"
import PostList from "../../components/post-list/PostList"
import "./Homepage.scss"

const Homepage = () => {
    return(
        <div className="home-page">
            <Header/>
            <div className="main">
                <PostList/>
            </div>
        </div>
    )
}

export default Homepage