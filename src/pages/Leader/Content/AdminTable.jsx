import { React, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import style from "./AdminTable.module.scss";
import { useAuth } from "@/hooks/AuthContext";

import TextField from "@mui/material/TextField";
import { FormLabel, FormGroup, Button, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import * as request from "@/utils/request";

export default function AdminTable(props) {
    const { getUser } = useAuth();
    const user = getUser();

    const { columns } = props;
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [listTk, setListTk] = useState([]);
    const [listAdminDTK, setListAdminDTK] = useState([]);
    const [selectedPointId, setSelectedPointId] = useState(0);

    const [checkedValues, setCheckedValues] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handlePointChange = (event) => {
        setSelectedPointId(event.target.value);
    };

    const handleCheckedValue = (num) => {
        if (num === checkedValues) {
            setCheckedValues(0);
        } else {
            setCheckedValues(num);
        }
    };

    useEffect(() => {
        const options = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWFkZXIiLCJpYXQiOjE3MDM5MDM0MTIsImV4cCI6MTcwNDQyMTgxMn0.V7JZfaMrGxzb9qEjPWAy_Djz7ONYDE73RoNc-2MV2Qc`,
            },
        };
        const fetchDTK = async () => {
            try {
                const res = await request.get("/point/tapket/all");
                setListTk(res);

                const res2 = await request.get("/admin/admintk/all", options);
                setListAdminDTK(res2);
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

        fetchDTK();
    }, []);

    useEffect(() => {
        const options = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const fetchAdmin = async () => {
            try {
                if (checkedValues == 1) {
                    setSelectedPointId("");

                    setRows(listAdminDTK);
                }
                if (checkedValues !== 1) {
                    setRows([]);
                }
                if (checkedValues == 2) {
                    if (
                        selectedPointId != null &&
                        selectedPointId != undefined
                    ) {
                        const res = await request.get(
                            "/admin/admingd/all?idtk=" + selectedPointId,
                            options
                        );
                        setRows(res);
                    }
                }
                console.log(rows);
            } catch (error) {
                if (error.response) {
                    console.log(error.response.status);
                } else {
                    console.log(`Error: ${error}`);
                }
            }
        };
        fetchAdmin();
    }, []);

    return (
        <div className={style.layout}>
            <Grid container className={style.grid}>
                <Grid item>
                    <TextField
                        id="packageid"
                        label="Id admin"
                        type="packageId"
                        sx={{ width: 300 }}
                    />
                </Grid>
                <Grid item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={listTk}
                        sx={{ width: 200 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Điểm tập kết" />
                        )}
                    />
                </Grid>
                <Grid item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={listTk}
                        sx={{ width: 200 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Điểm giao dịch" />
                        )}
                    />
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex" }}>
                    <Button variant="outlined">Tìm kiếm</Button>
                </Grid>
            </Grid>
            {/* <label>
                <input
                    type="checkbox"
                    name="value1"
                    checked={checkedValues === 1}
                    onChange={() => {
                        handleCheckedValue(1);
                        setRows(listAdminDTK);
                        console.log("Da goi list DTK");
                    }}
                />
                Tài khoản admin Điểm Tập Kết
            </label>

            <label>
                <input
                    type="checkbox"
                    name="value2"
                    checked={checkedValues === 2}
                    onChange={() => handleCheckedValue(2)}
                />
                Tài khoản admin Điểm Giao Dịch
                <div>
                    {checkedValues == 2 && (
                        <label>
                            Chọn điểm Tập Kết:
                            <select
                                value={
                                    checkedValues === 2 ? selectedPointId : ""
                                }
                                onChange={handlePointChange}
                            >
                                <option value="">-- Chọn --</option>
                                {listTk.map((diemtapket, index) => (
                                    <option key={index} value={diemtapket.id}>
                                        {diemtapket.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}
                </div>
            </label> */}
            <Paper
                sx={{ width: "90%", alignSelf: "center", overflow: "hidden" }}
            >
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
                                        style={{
                                            minWidth: column.minWidth,
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
                        {rows && rows.length > 0 ? (
                                rows
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
                                                        key={
                                                            column.id ?? "Null"
                                                        }
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
                                                <IconButton>
                                                    <PersonRemoveIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton>
                                                    <EditIcon />
                                                </IconButton>
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
