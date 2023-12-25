import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import style from "./ExpandableRow.module.scss";

const getStyle = (status) => {
    if (status === "da nhan") {
        return {
            background: "rgb(145 254 159 / 47%)",
            color: "green",
        };
    } else if (status === "huy bo") {
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

// function DetailsTable(props) {
//     return (
//         <div>
//             <h1>Details</h1>
//         </div>
//     );
// }

export function ExpandableRow(props) {
    const { row, columns, subRows, subColumns } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.packageId}
                sx={{ "& > *": { borderBottom: "unset" } }}
            >
                {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.id === "status" ? (
                                <span
                                    className={style.status}
                                    style={getStyle(value)}
                                >
                                    {value}
                                </span>
                            ) : (
                                <>{value}</>
                            )}
                        </TableCell>
                    );
                })}
                <TableCell key="subTable" align="center">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {/* <DetailsTable /> */}
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                                style={{ fontWeight: "bold" }}
                            >
                                Tracking History
                            </Typography>
                            <Table size="small" aria-label="history">
                                <TableHead>
                                    <TableRow>
                                        {subColumns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    width: column.width,
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {subRows.map((row) => (
                                        <TableRow key={row.name}>
                                            {subColumns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
