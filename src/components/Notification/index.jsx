import { Snackbar } from "@material-ui/core";
import React from "react";
import { Alert } from "@material-ui/lab";
// import Snackbar from "@mui/material/Snackbar";
function Notification(props) {
    const { notify, setNotify } = props;
    return (
        <div>
            <Snackbar
                open={notify.isOpen}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert severity={notify.type}>{notify.message}</Alert>
            </Snackbar>
        </div>
    );
}

export default Notification;
