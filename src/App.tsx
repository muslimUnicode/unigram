import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/sign-in/SignIn";
import Homepage from "./pages/homepage/Homepage";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useEffect } from "react";
import { getUser } from "./store/reducers/users/userAction";
import { setToken } from "./api/api";

function App() {
    const { isLoading } = useAppSelector((state) => state.user);
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
                <Route path="/" element={<Homepage />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </div>
    );
}

export default App;
