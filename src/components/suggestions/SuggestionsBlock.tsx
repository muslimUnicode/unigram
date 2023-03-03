import { useAppSelector } from "../../hooks/hooks"
import "./SuggestionsBlock.scss"

const SuggestionsBlock = () => {
    const { user } = useAppSelector(state => state.user)

    return(
        <div className="suggestions-block">
            <div className="current-user">
                <img src={user.avatar} alt=""/>
                <div className="name">
                    <div className="user-nickname">johndoe</div>
                    <div className="user-name">John Doe</div>
                </div>
                <span>Change</span>
            </div>
            <div className="suggestions">
                <div className="see-all-block">
                    <span className="suggestions-for-you">Suggestions for you</span>
                    <span className="see-all">See all</span>
                </div>
                <div className="users-suggestions">
                    <div className="user">
                        <img src={user.avatar} alt="" />
                        <div className="user-info">
                            <div className="user-name">janedoe</div>
                            <div className="suggestion-for-you">Suggestion for you</div>
                        </div>
                        <div className="follow">Follow</div>
                    </div>
                    <div className="user">
                        <img src={user.avatar} alt="" />
                        <div className="user-info">
                            <div className="user-name">robertdoe</div>
                            <div className="suggestion-for-you">Suggestion for you</div>
                        </div>
                        <div className="follow">Follow</div>
                    </div>
                    <div className="user">
                        <img src={user.avatar} alt="" />
                        <div className="user-info">
                            <div className="user-name">sandradoe</div>
                            <div className="suggestion-for-you">Suggestion for you</div>
                        </div>
                        <div className="follow">Follow</div>
                    </div>
                    <div className="user">
                        <img src={user.avatar} alt="" />
                        <div className="user-info">
                            <div className="user-name">pepedoe_</div>
                            <div className="suggestion-for-you">Suggestion for you</div>
                        </div>
                        <div className="follow">Follow</div>
                    </div>
                    <div className="user">
                        <img src={user.avatar} alt="" />
                        <div className="user-info">
                            <div className="user-name">simon.doe</div>
                            <div className="suggestion-for-you">Suggestion for you</div>
                        </div>
                        <div className="follow">Follow</div>
                    </div>
                </div>
            </div>
            <div className="other-links">Information · Help · Prisoner · API · Job · Privacity · Conditions · Locations · Trending accounts · Hashtags · Language</div>
            <div className="credits">© 2022 INSTAGRAM FROM SIMMXS</div>
        </div>
    )
}

export default SuggestionsBlock