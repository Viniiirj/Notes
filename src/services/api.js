import axios from "axios";

export const api = axios.create({
    // baseURL: "https://rocketnotes-api-yx5r.onrender.com"
    baseURL: 'https://rocketnotes-api-back-end.onrender.com'
})
