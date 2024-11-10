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


export const getRequest = async (endpoint, cb) => {
    const headers = getHeaders();

    await axios
        .get(`${domain}${endpoint}`, {
            headers
        })
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};



export const postRequest = async (endpoint, cb, data = {}) => {
    const headers = getHeaders();

    await axios
        .post(`${domain}${endpoint}`, data, { headers })
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};

export const deleteRequest = async (endpoint, cb, data = {}) => {
    const headers = getHeaders();
    await axios
        .delete(`${domain}${endpoint}`, {
            headers,
            data // Include `data` as part of the config for DELETE requests
        })
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};

export const putRequest = async (endpoint, cb, data = {}) => {
    const headers = getHeaders();
    await axios
        .put(`${domain}${endpoint}`, data, { headers }) // `data` is the body, and `headers` is the config
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};



