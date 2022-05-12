import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
// import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

const useStyles = makeStyles((theme) => ({
    dialog: {
        position: "absolute",
        top: theme.spacing(5),
        padding: theme.spacing(2),
    },
    dialogContent: {
        textAlign: "center",
    },
    dialogAction: {
        justifyContent: "center",
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
            cursor: "default",
        },
        "& .MuiDialog-root": {
            fontSize: "8rem",
        },
    },
}));

function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles();
    return (
        <Dialog
            open={confirmDialog.isOpen}
            classes={{ paper: classes.dialog }}>
            <DialogTitle></DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">{confirmDialog.title}</Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <button
                    className="bg-gray-400 hover:bg-gray-600 text-white py-2 px-5 flex sm rounded-full mb-3"
                    onClick={() =>
                        setConfirmDialog({
                            ...confirmDialog,
                            isOpen: false,
                        })
                    }>
                    No
                </button>
                <button
                    className="bg-red-600 hover:bg-red-800 text-white py-2 px-5 flex sm rounded-full mb-3"
                    onClick={confirmDialog.onConfirm}>
                    Yes
                </button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
