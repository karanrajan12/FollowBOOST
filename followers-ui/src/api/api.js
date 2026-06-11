import axios from "axios";

const API = axios.create({
    baseURL: "https://followboost.onrender.com/api"
});

export default API;
