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

import style from "./LocationTable.module.scss";

import request from "@/utils/request";
import SearchForm from "../PackageSearchForm/PackageSearchForm";

export default function LocationTable(props) {
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
        const fetchPackages = async () => {
            const path = "/point/tapket/all";
            const options = {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWFkZXIiLCJpYXQiOjE3MDM5MDM0MTIsImV4cCI6MTcwNDQyMTgxMn0.V7JZfaMrGxzb9qEjPWAy_Djz7ONYDE73RoNc-2MV2Qc`,
                },
                
            }
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
            {/* <SearchForm /> */}
            <Paper
                sx={{ width: "90%", alignSelf: "center", overflow: "hidden" }}
            >
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
                                            columns={columns}
                                            subRows={
                                                row["diemGiaoDichModelList"] == undefined ? [] : row["diemGiaoDichModelList"]
                                            }
                                            subColumns={subColumns}
                                            subTableTitle={
                                                "Danh sách điểm tập kết trực thuộc"
                                            }
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
