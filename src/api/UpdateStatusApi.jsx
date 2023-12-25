import axiosClient from "./AxiosClient";
import {useAuth} from "../hooks/AuthContext";
class StatusApi {
    getDataStatus(id, type, token) {
        // const url = `/products`;
        // Include the token in the headers
        const headers = {
            Authorization: `Bearer ${token}`
        };
        
        // const url = `/order/tracuu?mavandon=${params}`;
        const url = `/order/thongkestatusorder/dtk?iddtk=${id}&type=${type}`;
        return axiosClient.get(url, { headers });
    }
}

export default new StatusApi;