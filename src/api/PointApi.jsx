import axiosClient from "./AxiosClient";

class PointApi {
    getDataDtk() {
        // const url = `/products`;
        const url = `/point/tapket/all`;
        return axiosClient.get(url);
    }

    getDataDgd(params) {
        // const url = `/products`;
        const url = `/point/tapket?idtk=${params}`;
        return axiosClient.get(url);
    }

    getDgdToDtk(params) {
        const url = `/point/giaodich?idgd=${params}`;
        return axiosClient.get(url);
    }
}

export default new PointApi;