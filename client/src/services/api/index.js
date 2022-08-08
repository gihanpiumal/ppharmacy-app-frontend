import axios from "axios";

const baseURL = "http://localhost:8081/api";

export const getData = (url) => axios.get(baseURL);

export const postData = (url, obj) => axios.post(baseURL + url, obj);

export const putData = (url, obj) => axios.put(baseURL + url, obj);

export const deteteData = (url) => axios.put(baseURL + url);
