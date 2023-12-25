import axiosClient from "./AxiosClient";

class OrderApi {
    getDataSearch(params) {
        // const url = `/products`;
        
        const url = `/order/tracuu?mavandon=${params}`;
        return axiosClient.get(url);
    }
}

export default new OrderApi;