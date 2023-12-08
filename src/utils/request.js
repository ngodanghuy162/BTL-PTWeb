import axios from "axios";

const request = axios.create({
    baseURL: "https://localhost:8080/",
    headers: {
        "content-type": "application/json",
    },
});

export default request;
