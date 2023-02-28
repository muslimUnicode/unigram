import axios from "axios";
import Cookies from "universal-cookie";
import { store } from "../store/store";

const baseService = axios.create({
    baseURL: 'https://unicode-unigram.onrender.com'
});

export const cookies = new Cookies()

export const setToken = () => {
    baseService.defaults.headers.common.Authorization = "Bearer " + cookies.get("token")
}

export const logout = (): void => {
    cookies.remove("token")
    store.dispatch(logout)
}

baseService.interceptors.response.use((res)=>{return res;}, (error)=>{
    if(error.response.status === 401){
        logout()
    }
    return error
})

export default baseService