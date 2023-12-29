import axiosClient from "./AxiosClient";

class OrderApi {
    getDataSearch(params) {
        // const url = `/products`;
        
        const url = `/order/tracuu?mavandon=${params}`;
        return axiosClient.get(url);
    }

    getAllOrder(params, token) {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const url = `/order/thongkeorder/dgd/dondatao?iddgd=${params}`
        return axiosClient.get(url, { headers });
    }

    newOrder(data, token) {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const url = `/order/createorder`;
        return axiosClient.post(url, data, { headers });
    }

    ThongKeThanhCong(id, isOk, token) {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        const data = isOk ? "Giao hàng thành công" : "Giao hàng thất bại";
        
        const url = `order/thongkestatusorder/dgd/all?idgd=${id}&status=`;
        return axiosClient.get(url, data, { headers });
    }

    GetAllOrderOk(id, isOk, token) {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const status = isOk ? 1 : 2;
        const url = `/order/thongkestatusorder/dgd/all?idgd=${id}&status=${status}`
        return axiosClient.get(url, { headers });
    }
}

export default new OrderApi;