import axiosClient from "./AxiosClient";
class ProfileApi {
    getDataProfile(token) {
        // const url = `/products`;
        // Include the token in the headers
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        // const url = `/order/tracuu?mavandon=${params}`;
        const url = `http://localhost:8080/staff/getinfo?username=nv1tk1`;
        return axiosClient.get(url, { headers });
    }
}

export default new ProfileApi;