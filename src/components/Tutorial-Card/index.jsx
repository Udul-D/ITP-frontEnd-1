import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import isFuture from "date-fns/isFuture";
import getDate from "date-fns/getDate";
import Notification from "../Notification/index";
import ConfirmDialog from "../ConfirmDialog/index";
import {
    EyeOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function TutorialCard({ tutorial }) {
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

    let navigate = useNavigate();

    const handleUpdate = () => {
        navigate(`/tutorial/update/${tutorial._id}`, {
            state: {
                tutorialName: tutorial.tutorialName,
                subject: tutorial.subject,
                grade: tutorial.grade,
                teacherName: tutorial.teacherName,
                lessonName: tutorial.lessonName,
                link: tutorial.link,
            },
        });
    };

    const handleDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        });
        axios
            .delete(`/api/tutorial/delete/${id}`, {
                headers: {
                    authToken: localStorage.getItem("authToken"),
                },
            })
            .then((res) => {
                console.log("Tutorial deleted");
                window.location.reload();
                setNotify({
                    isOpen: true,
                    message: "Tutorial deleted successfully",
                    type: "error",
                });
            })
            .catch((err) => {
                console.log("delete error" + err);
            });
    };
    const callTutorial = () => {};
    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100">
            {localStorage.getItem("role") === "teacher" ? (
                    <div>
                        <EditOutlined
                            className="text-green-800 text-lg ml-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                            onClick={handleUpdate}
                        />
                        <DeleteOutlined
                            className="text-red-800 text-lg pl-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                            onClick={() => {
                                setConfirmDialog({
                                    isOpen: true,
                                    title: "Delete Tutorial",
                                    subTitle:
                                        "Are you sure you want to delete this tutorial?",
                                    onConfirm: () => {
                                        handleDelete(tutorial._id);
                                    },
                                });
                            }}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
                <div className=""></div>
                <img
                    className="h-40 w-full object-cover rounded-lg"
                    src="https://static.vecteezy.com/system/resources/previews/000/274/360/large_2x/exchange-student-global-education-concept-vector.jpg"
                    alt=""
                />
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2">
                        {tutorial.tutorialName}
                    </h2>
                </div>
                <div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.subject}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.grade}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.teacherName}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.lessonName}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.link}
                        </span>
                    </div>
                </div>
            </div>
            <a href="#">
                <button 
                    className="bg-green-600 w-full text-white font-bold py-2 px-4 rounded-b-lg"
                    onClick={callTutorial}>
                    Download
                </button>
            </a>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    );
}