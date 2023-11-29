import request from "../utils/request";

function getOrders(params) {
    request
        .get("/orders", {
            params: params,
        })
        .then((res) => {
            console.log(res.data);
        });
}
