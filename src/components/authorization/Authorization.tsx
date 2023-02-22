import "./Authorization.scss"
import logo from "../../assets/logo.svg"
import { useState } from "react"
import { authorization } from "../../store/reducers/users/usersAction"
import { useAppDispatch } from "../../hooks/hooks"

const Authorization = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useAppDispatch()

    const login = () => {
        dispatch(authorization({username, password}))
        setUsername("")
        setPassword("")
    }
    const handleKeyDown = (event:  React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            login()
        }
    }

    return(
        <div className="authorization">
            <div className="logo"><img src={logo} alt=""/></div>
            <input type="text" className="phone-number" placeholder="Телефон, имя пользователя или эл.адрес" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" className="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => handleKeyDown(e)}/>
            <button onClick={login}>Войти</button>
        </div>
    )
}

export default Authorization