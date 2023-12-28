import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "content-type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWFkZXIiLCJpYXQiOjE3MDM3MTQ0MjEsImV4cCI6MTcwNDIzMjgyMX0.lhRiylvWXeZg-WhnZiPaSodR17uiCJ_ZM4m-kGLj2uA",
    },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
