import axiosClient from "./AxiosClient";

const OrderApi = {
    getDataSearch(params) {
        // const url = `/products`;
        
        const url = `/order/tracuu?mavandon=1HWC1700386580181`;
        return axiosClient.get(url, {params});
    }
    // getDataSearch(id) {
    //     const url = `/order/tracuu?mavandon=${id}`;
    //     return axiosClient.get(url);
    // }
}

export default OrderApi;