import {DeleteOutlined } from "@ant-design/icons"
import ConfirmDialog from "../ConfirmDialog";
import Notification from "../Notification";
import { useState } from "react";
import axios from "axios";
import { TeacherProfile } from "../../Pages";
import teacherprofile  from "../../Assets/Images/teacherprofile.jpg";
export default function TeacherList({teacher}) {

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    const handleDelete = async (e) => {
        e.preventDefault();
        axios
            .delete(`/api/teacher/delete/${teacher._id}`, {
                headers: { authToken: localStorage.getItem("authToken") },
            })
            .then((res) => {
                console.log("deleted");
                window.location.reload();
                setNotify({
                    isOpen: true,
                    message: "Teacher account deleted successfully",
                    type: "error",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100">
                <img
                    className="h-50 w-full object-cover rounded-lg"
                    src={teacherprofile}
                    alt=""
                />
                <div className="p-2">
                    <h2 className="font-bold text-xl mb-2">
                        Mr {teacher.firstName}
                    </h2>
                    <p className="text-sm text-justify text-gray-600">
                        {teacher.higerQulification}
                    </p>
                </div>
                <div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Subject : {teacher.subject}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Class Type : {teacher.classType}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Grade : {teacher.grade}
                        </span>
                    </div>
                </div>
                <a class="text-red-400 hover:text-gray-100 ml-2">
                    <i class="material-icons-round text-base">
                        <DeleteOutlined
                            onClick={(e) =>
                                setConfirmDialog({
                                    isOpen: true,
                                    title: "Delete Profile",
                                    subTitle:
                                        "Are you sure you want to delete this Profile?",
                                    onConfirm: () => {
                                        {
                                            handleDelete(e);
                                        }
                                    },
                                })
                            }
                        />
                    </i>
                </a>
            </div>
            <Notification notify={notify} setNotify={setNotify}/>
            <ConfirmDialog 
                     confirmDialog={confirmDialog}
                     setConfirmDialog={setConfirmDialog} />
        </div>
    );
}
