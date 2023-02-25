import "./NavBar.scss"
import logo from "../../assets/logo.svg"
import homeIcon from "../../assets/home-active.svg"
import msgIcon from "../../assets/msg.svg"
import addIcon from "../../assets/add.svg"
import trendIcon from "../../assets/trends.svg"
import likesIcon from "../../assets/likes.svg"
import searchIcon from "../../assets/search.svg"
import { useAppSelector } from "../../hooks/hooks"


const NavBar = () => {
    const avatar = useAppSelector(state => state.user.user.avatar)

    return(
        <div className="nav-bar">
            <div className="logo"><img src={logo} alt=""/></div>
                <div className="search">
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder="Search"/>
                </div>
            <div className="menu">
                <div><img src={homeIcon} alt="" /></div>
                <div><img src={msgIcon} alt="" /></div>
                <div><img src={addIcon} alt="" /></div>
                <div><img src={trendIcon} alt="" /></div>
                <div><img src={likesIcon} alt="" /></div>
                <div className="profile-icon"><img src={avatar} alt="" /></div>
            </div>
        </div>
    )
}

export default NavBar