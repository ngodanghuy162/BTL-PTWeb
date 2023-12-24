import axiosClient from "./AxiosClient";

class LoginApi {
    login = async (data) => {
        const url = '/auth/login';
     return await axiosClient.post(url, data);
    }
}

export default new LoginApi();