import { React, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import style from "./EmployeeTable.module.scss";
import request from "@/utils/request";

import SearchEmployeeForm from "../SearchEmployeeForm/SearchEmployeeForm";

import { useAuth } from "@/hooks/AuthContext";
import RemoveDialog from "../../RemoveDialog/RemoveDialog";
import ModifyDialog from "../../ModifyDialog/ModifyDialog";

const getPath = (userInfo) => {
    if (userInfo.role === "LEADER") {
        return;
    }

    if (userInfo.role === "ADMINGD") {
        return "/staff/qlnvgd";
    }

    if (userInfo.role === "ADMINTK") {
        return "/staff/qlnvtk";
    }
};

export default function EmployeeTable(props) {
    const { getUser } = useAuth();
    const user = getUser();

    const { columns } = props;

    const [active, setActive] = useState(false);
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleActive = () => {
        setActive(false);
    };

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
                idwork: user.userInfo.id_work,
            },
        };

        const fetchEmployees = async () => {
            try {
                const res = await request.get(path, options);
                setRows(res);
                // setSelectedRows(res);
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

        fetchEmployees();
    }, []);

    return (
        <div className={style.layout}>
            <SearchEmployeeForm key="search" />
            <Paper key="main table" className={style.layout__paper}>
                <TableContainer
                    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                    sx={{ maxHeight: 470 }}
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
                                        style={{
                                            minWidth: column.minWidth,
                                            width: column.width,
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell
                                    align="left"
                                    style={{
                                        width: "5%",
                                    }}
                                ></TableCell>
                                <TableCell
                                    align="left"
                                    style={{
                                        width: "5%",
                                    }}
                                ></TableCell>
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
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.code}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            "number"
                                                            ? column.format(
                                                                  value
                                                              )
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell>
                                                <ModifyDialog />
                                            </TableCell>
                                            <TableCell>
                                                <RemoveDialog
                                                    employeeInfo={row}
                                                />
                                            </TableCell>
                                        </TableRow>
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
