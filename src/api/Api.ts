import axios from "axios";
import Cookies from "universal-cookie";

const baseService = axios.create({
    baseURL: 'https://unicode-unigram.onrender.com'
});

export const cookies = new Cookies()

export const setToken = () => {
    baseService.defaults.headers.common.Authorization = "Bearer " + cookies.get("token")
}

export default baseService