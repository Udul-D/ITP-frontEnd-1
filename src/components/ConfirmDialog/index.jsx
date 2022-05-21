import React, { Fragment } from "react";
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
import { ExclamationIcon } from "@heroicons/react/outline";
// import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

const useStyles = makeStyles((theme) => ({
    dialog: {
        position: "absolute",
        justifyContent: "center",
    },
    dialogContent: {
        // textAlign: "center",
    },
    dialogAction: {
        justifyContent: "center",
        marginBottom: theme.spacing(2),
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
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <Dialog
                open={confirmDialog.isOpen}
                classes={{ paper: classes.dialog }}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="flex pt-3 justify-center items-center">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationIcon
                                    className="h-6 w-6 text-red-600"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                        <DialogContent className={classes.dialogContent}>
                            <Typography variant="p" className="font-bold">
                                {confirmDialog.title}
                            </Typography>
                            <Typography variant="subtitle2">
                                {confirmDialog.subTitle}
                            </Typography>
                        </DialogContent>
                    </div>
                </div>

                <DialogActions className={classes.dialogAction}>
                    <button
                        className="w-full px-10 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() =>
                            setConfirmDialog({
                                ...confirmDialog,
                                isOpen: false,
                            })
                        }>
                        No
                    </button>
                    <button
                        className="w-full px-10 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={confirmDialog.onConfirm}>
                        Yes
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmDialog;
