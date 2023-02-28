import "./SignIn.scss";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { authorization } from "../../store/reducers/users/userAction";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate  = useNavigate()
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();

    const login = async () => {
        try {
            await dispatch(authorization({ username, password })).unwrap();
            setUsername("");
            setPassword("");
            navigate('/')
        } catch (e) {
            return e;
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            login();
        }
    };

    return (
        <div className="authorization">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <input
                type="text"
                className="phone-number"
                placeholder="Телефон, имя пользователя или эл.адрес"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <button onClick={login}>Войти</button>
        </div>
    );
};

export default SignIn;
