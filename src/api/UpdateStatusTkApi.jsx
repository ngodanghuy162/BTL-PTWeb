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
        const url = `/order/thongkestatusorder/dtk?id=${id}&type=${type}`;
        return axiosClient.get(url, { headers });
    }

    updateStatus(iddtk,mavandon, token) {
        
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
        // const url = `/order/tracuu?mavandon=${params}`;
        const url = `http://localhost:8080/order/xacnhandtk?idtk=${iddtk}&mavandon=${mavandon}`;
        return axiosClient.put(url, null, config);
    }

    orderForward(data, mavandon, token) {
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      const url=`order/createstatus/${mavandon}`;
      return axiosClient.post(url, data, config);
    }
}

export default new StatusApi;