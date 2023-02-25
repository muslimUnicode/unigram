import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/sign-in/SignIn';
import Homepage from './pages/homepage/Homepage';
import Auth from './components/auth/Auth';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import {useEffect} from "react"
import { getUser } from './store/reducers/users/userAction';
import { setToken } from './api/Api';
import { getPosts } from './store/reducers/posts/postsAction';

function App() {
    const {user} = useAppSelector(state => state.user)
    const {posts} = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        posts && dispatch(getPosts())
        setToken()
        user.token && dispatch(getUser())
    }, [])

    return (
        <div className="app">
            <Routes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/" element={<Auth><Homepage/></Auth>}/>
            </Routes>
        </div>
    );
}

export default App;
