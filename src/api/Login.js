import axiosClient from "./AxiosClient";

class LoginApi {
    login = async (data) => {
        const url = '/auth/login';
        console.log(url);
     return await axiosClient.post(url, data);
    }
}

export default new LoginApi();