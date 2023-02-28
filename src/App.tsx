import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/sign-in/SignIn";
import Homepage from "./pages/homepage/Homepage";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useEffect } from "react";
import { getUser } from "./store/reducers/users/userAction";
import { setToken } from "./api/Api";

function App() {
    const { isLoading, isAuth } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleGetUser = async () => {
        try {
            setToken();
            await dispatch(getUser()).unwrap();
            navigate("/");
        } catch (error) {
            navigate("/sign-in");
        }
    };

    useEffect(() => {
        handleGetUser()
    }, []);

    if (isLoading) {
        return <div>loading...</div>;
    }

    return (
        <div className="app">
            <Routes>
                {isAuth ? (
                    <Route path="/" element={<Homepage />} />
                ) : (
                    <Route path="/sign-in" element={<SignIn />} />
                )}
                <Route path="/" element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default App;
