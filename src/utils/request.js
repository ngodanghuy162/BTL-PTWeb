import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
});

// Add a response interceptor
request.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;