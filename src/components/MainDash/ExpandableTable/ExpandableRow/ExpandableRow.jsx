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
import "../ExpandableTable.css";

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

export function ExpandableRow(props) {
    const { row, columns, subColumns } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.packageId}
                style={{ color: "white" }}
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
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        style={{ maxWidth: 10 }}
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
                    colSpan={8}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                                style={{ fontWeight: "bold" }}
                            >
                                History
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
                                    <TableRow>
                                        <TableCell>
                                            {row.history[0].trackId}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}