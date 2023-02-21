import axios from "axios";

const baseService = axios.create({
    baseURL: 'https://unicode-unigram.onrender.com'
});

export default baseService