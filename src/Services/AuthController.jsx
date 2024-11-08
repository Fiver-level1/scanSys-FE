import axios from "axios";
import { BASE_URL } from "./Constant";
const domain = BASE_URL;
const getHeaders = (type) => {
    let headers = {};
    if (type === "form") headers["Content-Type"] = "multipart/form-data";
    else headers["Content-Type"] = "application/json";
    return headers;
};


export const getRequestAuth = async (endpoint, cb, data = {}) => {
    const headers = getHeaders();
    await axios
        .get(`${domain}/${endpoint}/`, data, { headers })
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};


export const postRequestAuth = async (endpoint, cb, data = {}) => {
    const headers = getHeaders();
    await axios
        .post(`${domain}/${endpoint}/`, data, { headers })
        .then((res) => cb(null, res))
        .catch((err) => cb(err, null));
};
