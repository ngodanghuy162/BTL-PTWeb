import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import "./InfoTable.css";
import style from "./InfoTable.module.scss";
import { ExpandableRow } from "./ExpandableRow/ExpandableRow";

const columns = [
    { id: "packageId", label: "Package ID", minWidth: 70, align: "left" },
    {
        id: "senderAddress",
        label: "Sender Address",
        minWidth: 50,
        align: "left",
    },
    {
        id: "receiverAddress",
        label: "Receiver Address",
        minWidth: 70,
        align: "left",
    },
    {
        id: "weight",
        label: "Weight",
        minWidth: 70,
        align: "left",
    },
    {
        id: "type",
        label: "Type",
        minWidth: 70,
        align: "left",
    },
    {
        id: "status",
        label: "Status",
        minWidth: 70,
        align: "left",
    },
    {
        id: "cost",
        label: "Cost",
        minWidth: 70,
        align: "left",
    },
];

function createData(
    packageId,
    senderAddress,
    receiverAddress,
    weight,
    type,
    status,
    cost
) {
    return {
        packageId,
        senderAddress,
        receiverAddress,
        weight,
        type,
        status,
        cost,
    };
}

const rows = [
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
    createData(
        "ABC123",
        "Ha Noi",
        "Ho Chi Minh",
        20,
        "hang thong thuong",
        "dang gui",
        400
    ),
];

export default function InfoTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className={style.Table}>
            <h3>Packages</h3>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer
                    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                    sx={{ maxHeight: 440 }}
                >
                    <Table
                        stickyHeader
                        sx={{ minWidth: 650 }}
                        aria-label="sticky table"
                    >
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ color: "white" }}>
                            {rows
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row) => {
                                    return (
                                        <ExpandableRow
                                            key={row.productId}
                                            row={row}
                                        />
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
