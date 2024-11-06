import axios from "axios";
import { BASE_URL } from "./Constant";
const domain = BASE_URL;
const getHeaders = (type) => {
    const token = localStorage.getItem('access_token')
    let headers = {};
    if (type === "form") headers["Content-Type"] = "multipart/form-data";
    else headers["Content-Type"] = "application/json";

    if (token) headers['Authorization'] = `Bearer ${token}`
    return headers;
};


export const getRequest = async (endpoint, cb, data = {}) => {
    const headers = getHeaders();
    await axios
        .get(`${domain}${endpoint}/`, data, { headers })
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};


export const postRequest = async (endpoint, cb, data = {}) => {
    const headers = getHeaders();
    await axios
        .get(`${domain}/api${endpoint}/`, data, { headers })
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};