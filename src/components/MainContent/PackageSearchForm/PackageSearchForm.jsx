import { React, useState } from "react";
import TextField from "@mui/material/TextField";

import style from "./PackageSearchForm.module.scss";
import { FormLabel, FormGroup, Button, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
];

const statusList = ["delivering", "failed"];

const PackageSearchForm = () => {
    return (
        <>
            <FormLabel>Tìm kiếm</FormLabel>
            <Grid container className={style.grid}>
                <Grid item>
                    <TextField
                        id="packageid"
                        label="Id đơn hàng"
                        type="packageId"
                        // sx={{ width: 200 }}
                    />
                </Grid>
                <Grid item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={statusList}
                        sx={{ width: 200 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Trạng thái" />
                        )}
                    />
                </Grid>
                <Grid item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
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
        </>
    );
};

export default PackageSearchForm;
