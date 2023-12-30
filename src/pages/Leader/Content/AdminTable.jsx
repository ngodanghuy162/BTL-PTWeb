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

import * as request from "@/utils/request";

// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function AdminTable(props) {
    const {getUser} = useAuth();
    const user = getUser();
    const options = {
        headers: {
            "Authorization" : `Bearer ${user.token}`,
        }
    }
    const {columns} = props
    const [checkedValues, setCheckedValues] = useState(0);
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [listAdminDTK, setListAdminDTK] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedPointId, setSelectedPointId] = useState(0);
    const [listTk, setListTk] = useState([]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handlePointChange = (event) => {
        setSelectedPointId(event.target.value);
    }

    useEffect(() => {
        const fetchDTK = async () => {
            try {
                    const res = await fetch("http://localhost:8080/point/tapket/all");
                    console.log(res);
                    setListTk(res);
                    // // const res2 = await request.get("/admin/admintk/all",options);
                    // // console.log(res2);
                    // setListAdminDTK(res2);
                    // // setRows(res2);
                    console.log("Da goi dong 64");
                    // console.log(res2);
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
        const fetchAdmin = async () => {
            try {
                if (checkedValues == 1) {
                    setSelectedPointId("");
                        setRows(listAdminDTK);
                }
                //   if(checkedValues !== 1 ) {
                //     setRows([]);
                //   }
                  if(checkedValues == 2) {
                    if(selectedPointId != null && selectedPointId != undefined) {
                    const res = await request.get("/admin/admingd/all?idtk=1", options );
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
    }, [checkedValues,selectedPointId]);

    return (
        <div className={style.layout}>
            <label>
        <input
          type="checkbox"
          name="value1"
          checked={checkedValues === 1}
          onChange={() => {
            setCheckedValues(1);
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
          onChange={() =>setCheckedValues(2)}
        />
        Tài khoản admin Điểm Giao Dịch
        <div>
        {(checkedValues ==2) && <label>
            Chọn điểm Tập Kết:
            <select value={checkedValues === 2 ? selectedPointId : ""} onChange={handlePointChange}>
              <option value="">-- Chọn --</option>
              {listTk.map((diemtapket, index) => (
  <option key={index} value={diemtapket.id}>
    {diemtapket.name}
  </option>
))}
            </select>
          </label>}
          </div>
      </label>
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
                                    .map((row) => (
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
                                            key={column.id ?? "Null"}
                                            align={column.align}
                                            >
                                            {column.format &&
                                            typeof value === "number"
                                                ? column.format(value)
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
                                    ))
) : (
  <TableRow>
    <TableCell colSpan={columns.length + 2} align="center">
      No data available
    </TableCell>
  </TableRow>
)}
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
