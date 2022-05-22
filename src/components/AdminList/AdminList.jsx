import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import Footer from "../Footer/Footer";
import Notification from "../Notification/index";
import ConfirmDialog from "../ConfirmDialog/index";
import Tooltip from "@material-ui/core/Tooltip";

export default function AdminList() {
    const [admins, setAdmins] = useState([]);

    let navigate = useNavigate();

    // fetching admins from the databse
    useEffect(() => {
        const fetchAdmin = async () => {
            const res = await axios.get("api/admin/all");
            setAdmins(res.data);
            console.log(res.data);
        };
        fetchAdmin();
    }, []);

    // setting notifications
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    // setting delete confirmation dialogue
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

    // deleting admins from the database
    const DeleteAdmin = async (id) => {
        await axios
            .delete(`api/admin/delete/${id}`, {
                headers: { authToken: localStorage.getItem("authToken") },
            })
            .then((res) => {
                console.log("Admin Deleted");
                window.location.reload();
                setNotify({
                    isOpen: true,
                    message: "Admin Deleted Successfully",
                    type: "error",
                });
            });
    };

    // updating admin details in the database
    const UpdateAdmin = async (
        id,
        firstName,
        lastName,
        nic,
        userName,
        phoneNumber,
        email,
        address,
        password,

    ) => {
        navigate(`/admin/update/${id}`, {
            state: {
                firstName: firstName,
                lastName: lastName,
                nic: nic,
                username: userName,
                phoneNumber: phoneNumber,
                email: email, 
                address: address,
                password: password,
            },
        });
    };

    return (
        <div className="p-26">
            <div className=" items-center justify-center bg-white">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible">
                        <div className="p-5 bg-gray-100">
                            <div className="overflow-auto rounded-lg shadow">
                                <table className="w-full">
                                    <thead className="bg-green-200 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Action
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Admin Name
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                NIC
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Phone Number
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Email
                                            </th>
                                        </tr>
                                    </thead>
                                <tbody>
                                        {admins.map((s) => (
                                            <tr className="bg-green-100 lg:text-black">
                                                <td className="p-3">
                                                    <Tooltip
                                                        title="Update Student Details"
                                                        placement="top">
                                                        <i className="material-icons-outlined text-base">
                                                            <EditOutlined
                                                                className="text-yellow-400 mx-2 hover:text-yellow-500"
                                                                onClick={() =>
                                                                    UpdateAdmin(
                                                                        s._id,
                                                                        s.firstName,
                                                                        s.lastName,
                                                                        s.nic,
                                                                        s.userName,
                                                                        s.phoneNumber,
                                                                        s.email,
                                                                        s.address,
                                                                        s.password,
                                                                    )
                                                                }
                                                            />
                                                        </i>
                                                    </Tooltip>

                                                    <Tooltip
                                                        title="Delete Student"
                                                        placement="top">
                                                        <i className="material-icons-round text-base">
                                                            <DeleteOutlined
                                                                className="text-red-400 ml-2 hover:text-red-500"
                                                                onClick={(
                                                                    e,
                                                                ) =>
                                                                    setConfirmDialog(
                                                                        {
                                                                            isOpen: true,
                                                                            title: "Delete Student",
                                                                            subTitle:
                                                                                "Are you sure you want to delete this student ?",
                                                                            onConfirm:
                                                                                () => {
                                                                                    DeleteAdmin(
                                                                                        s._id,
                                                                                        e,
                                                                                    );
                                                                                },
                                                                        },
                                                                    )
                                                                }
                                                            />
                                                        </i>
                                                    </Tooltip>
                                                    </td>
                                                    <td className="p-3 font-medium capitalize">
                                                    {s.firstName +
                                                        " " +
                                                        s.lastName}
                                                </td>
                                                <td className="p-3">   
                                                    {s.NIC} 
                                                </td>
                                                <td className="p-3 ">
                                                    {s.phoneNumber}
                                                </td>
                                                <td className="p-3 ">
                                                    {s.email}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
            <Footer/>
        </div>
    );
}
