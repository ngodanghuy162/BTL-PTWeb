import axios from "axios";

const request = axios.create({
    baseURL: "https://127.0.0.1:8080/",
    headers: {
        "content-type": "application/json",
    },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
