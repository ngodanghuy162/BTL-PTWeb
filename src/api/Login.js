import axiosClient from "./AxiosClient";

class LoginApi {
    login = (data) => {
        const url = '/login';
        return axiosClient.post(url, data);
    }
}

export default new LoginApi();