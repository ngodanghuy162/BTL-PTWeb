import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import style from "./InfoTable.module.scss";
import "./InfoTable.css";

function createData(orderId, sender, receiver, weight, type, status) {
    return { orderId, sender, receiver, weight, type, status };
}

const rows = [
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "da nhan"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "huy bo"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
    createData(11, "Ha Noi", "Ho Chi Minh", "40kg", "hang de vo", "dang gui"),
];

const getStyle = (status) => {
    if (status === "dang gui") {
        return {
            background: "rgb(145 254 159 / 47%)",
            color: "green",
        };
    } else if (status === "da nhan") {
        return {
            background: "#ffadad8f",
            color: "red",
        };
    } else {
        return {
            background: "#59bfff",
            color: "white",
        };
    }
};

const InfoTable = () => {
    return (
        <div className={style.Table}>
            <h3>Recent Package</h3>
            <TableContainer
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                component={Paper}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order</TableCell>
                            <TableCell align="left">Noi Gui</TableCell>
                            <TableCell align="left">Noi Nhan</TableCell>
                            <TableCell align="left">Trong Luong</TableCell>
                            <TableCell align="left">Loai Hang</TableCell>
                            <TableCell align="left">Tinh Trang</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.orderId}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.orderId}
                                </TableCell>
                                <TableCell align="left">{row.sender}</TableCell>
                                <TableCell align="left">
                                    {row.receiver}
                                </TableCell>
                                <TableCell align="left">{row.weight}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">
                                    <span
                                        className={style.status}
                                        style={getStyle(row.status)}
                                    >
                                        {row.status}
                                    </span>
                                </TableCell>
                                <TableCell
                                    className={style.Details}
                                    align="left"
                                >
                                    Detail
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default InfoTable;
