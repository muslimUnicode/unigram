import axios from "axios";
import Cookies from "js-cookie";
import { store } from "../store/store";
import { logoutReducer } from "../store/reducers/users/userSlice";

const baseService = axios.create({
    baseURL: 'https://unicode-unigram-xmfu.onrender.com'
});


export const setToken = () => {
    baseService.defaults.headers.common.Authorization = "Bearer " + Cookies.get("token")
}

export const logout = (): void => {
    Cookies.remove("token")
    store.dispatch(logoutReducer())
}

baseService.interceptors.response.use((res)=>{return res;}, (error)=>{
    if(error.response.status === 401){
        logout()
    }
    return error
})

export default baseService