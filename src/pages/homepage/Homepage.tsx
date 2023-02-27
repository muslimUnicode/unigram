import Header from "../../components/header/NavBar"
import PostList from "../../components/post-list/PostList"
import SuggestionsBlock from "../../components/suggestions-block/SuggestionsBlock"
import "./Homepage.scss"

const Homepage = () => {
    return(
        <div className="home-page">
            <Header/>
            <div className="main">
                <PostList/>
                <SuggestionsBlock/>
            </div>
        </div>
    )
}

export default Homepage