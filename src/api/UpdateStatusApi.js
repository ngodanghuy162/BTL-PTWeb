import axiosClient from "./AxiosClient";

class StatusApi {
    getDataStatus(params) {
        // const url = `/products`;
        
        const url = `/order/tracuu?mavandon=${params}`;
        return axiosClient.get(url);
    }
}

export default new StatusApi;