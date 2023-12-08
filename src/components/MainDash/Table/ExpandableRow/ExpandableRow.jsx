import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

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

const getStyle = (status) => {
    if (status === "Approved") {
        return {
            background: "rgb(145 254 159 / 47%)",
            color: "green",
        };
    } else if (status === "Pending") {
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
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                        </TableCell>
                    );
                })}
                <TableCell>
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
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                History
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
