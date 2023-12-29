import { React, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ExpandableRow } from "@/components/ExpandableRow/ExpandableRow";

import request from "@/utils/request";

import { useAuth } from "@/hooks/AuthContext";

import PackageSearchForm from "../PackageSearchForm/PackageSearchForm";
import style from "./PackageReceiveTable.module.scss";

const getPath = (userInfo) => {
    if (userInfo.role === "LEADER") {
        return "/order/thongkeorder/all";
    }

    if (userInfo.role === "ADMINGD") {
        return "/order/thongkeorder/dgd";
    }

    if (userInfo.role === "ADMINTK") {
        return "/order/thongkestatusorder/dtk";
    }
};

export default function PackageReceiveTable(props) {
    const { getUser } = useAuth();
    const user = getUser();

    const { columns, subColumns } = props;

    const [page, setPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const path = getPath(user.userInfo);
        const options = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
            params: {
                id: user.userInfo.id_work,
            },
        };

        const fetchPackages = async () => {
            try {
                const res = await request.get(path, options);
                setRows(res);
                console.log(res);
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

        fetchPackages();
    }, []);

    return (
        <div className={style.layout}>
            <PackageSearchForm />
            <Paper className={style.layout__paper}>
                <TableContainer
                    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                    sx={{ maxHeight: 410 }}
                >
                    <Table
                        stickyHeader
                        sx={{ minWidth: 500 }}
                        aria-label="sticky table"
                    >
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth,
                                            width: column.width,
                                        }}
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
                                            key={row.maVanDon}
                                            row={row}
                                            columns={columns}
                                            subRows={
                                                row["statusDonHangModelList"]
                                            }
                                            subColumns={subColumns}
                                            subTableTitle={"Lịch sử giao hàng"}
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
