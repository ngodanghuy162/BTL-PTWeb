import axiosClient from "./AxiosClient";
import {useAuth} from "../hooks/AuthContext";
class StatusApi {
    getDataStatus(id, type, token) {
        // const url = `/products`;
        // Include the token in the headers
        const headers = {
            Authorization: `Bearer ${token}`
        };
        
        const url = `order/allstatustogdfromdtk/${id}`;
        return axiosClient.get(url, { headers });
    }

    updateStatus(iddgd, mavandon, token) {
        
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      //???
        // const url = `/order/tracuu?mavandon=${params}`;
        const url = `http://localhost:8080/order/xacnhandtk?idgd=${iddgd}&mavandon=${mavandon}`;
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

    DonVeTuTk(id, token) {
      // const url = `/products`;
      // Include the token in the headers
      const headers = {
          Authorization: `Bearer ${token}`
      };
      
      // const url = `/order/tracuu?mavandon=${params}`;order/allstatustogdfromdtk/{idgd}
      const url = `/order/allstatustogdfromdtk/${id}`;
      return axiosClient.get(url, { headers });
    }

    XacNhanDonHangVe(id, mavandon, token) {
      const headers = {
          Authorization: `Bearer ${token}`
      };
      
      // const url = `/order/tracuu?mavandon=${params}`;order/allstatustogdfromdtk/{idgd}
      const url = `/order/xacnhandgd?idgd=${id}&mavandon=${mavandon}`;
      return axiosClient.put(url, null, { headers });
    }

    DonGuiDtk(id, token) {
      const headers = {
          Authorization: `Bearer ${token}`
      };
      
      // const url = `/order/tracuu?mavandon=${params}`;order/allstatustogdfromdtk/{idgd}
      const url = `/order/thongkeorder/dgd?iddgd=${id}&status=1`;
      console.log(url);
      return axiosClient.get(url, { headers });
    }

    XacNhanDonGiao(id, isOk, mavandon, token) {
      const headers = {
          Authorization: `Bearer ${token}`
      };

      const status = isOk ? 1 : 2;
      
      const url = `/order/xacnhandgddenkh?idgd=${id}&mavandon=${mavandon}&status=${status}`;
      console.log(token);
      return axiosClient.put(url, null, { headers });
    }

    LayDsDonGiao(id, token) {
      const headers = {
        Authorization: `Bearer ${token}`
    };

    const url = `/order/dontoikhachhang/all?idgd=${id}`;
    return axiosClient.get(url, { headers });
    }
}

export default new StatusApi;