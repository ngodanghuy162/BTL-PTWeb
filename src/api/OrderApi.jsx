import axiosClient from "./AxiosClient";

class OrderApi {
    getDataSearch(params) {
        // const url = `/products`;
        
        const url = `/order/tracuu?mavandon=${params}`;
        return axiosClient.get(url);
    }

    newOrder(data, token) {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const url = `/order/createorder`;
        return axiosClient.post(url, data, { headers });
    }
}

export default new OrderApi;