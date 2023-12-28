import * as request from "@/utils/request";

export const getPackages = async () => {
    try {
        const res = await request.get("order/thongkeorder/all");
        return res.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(`Error: ${error}`);
        }
    }
};

export const getEmployees = async () => {
    try {
        const res = await request.get("/employees");
        return res.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(`Error: ${error}`);
        }
    }
};
