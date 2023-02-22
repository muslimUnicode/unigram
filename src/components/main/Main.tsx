import "./Main.scss"
import logo from "../../assets/logo.svg"

const Main = () => {
    return(
        <div className="main">
            <header>
                <div className="logo"><img src={logo} alt=""/></div>
                <div className="search">
                    <input type="text"/>
                </div>
                <div className="menu"></div>
            </header>
        </div>
    )
}

export default Main