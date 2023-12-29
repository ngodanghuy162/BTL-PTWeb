import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import IconButton from "@mui/material/IconButton";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { useAuth } from "@/hooks/AuthContext";
import request from "@/utils/request";

const getPath = (username) => {
    return "/staff/delete/" + username;
};

export default function RemoveDialog(props) {
    const { getUser } = useAuth();
    const user = getUser();
    const { employeeInfo } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemove = async () => {
        try {
            console.log(employeeInfo);
            console.log("xoas");
            const path = getPath(employeeInfo.username);
            const options = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const res = await request.delete(path, options);
            setOpen(false);
        } catch (error) {
            console.log(`Error: ${error}`);
            setOpen(false);
        }
    };

    return (
        <React.Fragment>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <PersonRemoveIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Xóa tài khoản nhân viên?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Mọi thông tin về tài khoản sẽ không thể được khôi phục
                        lại. Liệu bạn có muốn tiếp tục?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Hủy bỏ
                    </Button>
                    <Button onClick={handleRemove}>Tiếp tục</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
