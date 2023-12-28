import axiosClient from "./AxiosClient";

class PointApi {
    getDataDtk(params) {
        // const url = `/products`;
        
        const url = `point/tapket?idtk=${params}`;
        return axiosClient.get(url);
    }
}

export default new PointApi;