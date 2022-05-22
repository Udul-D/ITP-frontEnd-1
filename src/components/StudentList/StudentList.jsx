import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import Notification from "../Notification/index";
import ConfirmDialog from "../ConfirmDialog/index";
import Tooltip from "@material-ui/core/Tooltip";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaDownload } from "react-icons/fa";

export default function StudentList() {
    const [students, setStudents] = useState([]);

    let navigate = useNavigate();

    // fetching students from the databse
    useEffect(() => {
        const fetchStudent = async () => {
            const res = await axios.get("api/student/all");
            setStudents(res.data);
            console.log(res.data);
        };
        fetchStudent();
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

    // deleting students from the database
    const deleteStudent = async (id) => {
        await axios
            .delete(`api/student/delete/${id}`, {
                headers: { authToken: localStorage.getItem("authToken") },
            })
            .then((res) => {
                console.log("Student Deleted");
                window.location.reload();
                setNotify({
                    isOpen: true,
                    message: "Student Deleted Successfully",
                    type: "error",
                });
            });
    };

    // updating student details in the database
    const updateStudent = async (
        id,
        firstName,
        lastName,
        birthday,
        NIC,
        phoneNumber,
        email,
        school,
        grade,
        medium,
        parentName,
        parentPhoneNumber,
        parentEmail,
        studentGender,
        parentAddress,
        parentOccupation,
        imageURL,
        subject,
        teacher,
    ) => {
        navigate(`/student/update/${id}`, {
            state: {
                firstName: firstName,
                lastName: lastName,
                birthday: birthday,
                NIC: NIC,
                phoneNumber: phoneNumber,
                email: email,
                school: school,
                grade: grade,
                medium: medium,
                parentName: parentName,
                parentPhoneNumber: parentPhoneNumber,
                parentEmail: parentEmail,
                studentGender: studentGender,
                parentAddress: parentAddress,
                parentOccupation: parentOccupation,
                imageURL: imageURL,
                subject: subject,
                teacher: teacher,
            },
        });
    };

    const columns = [
        { title: "Student Name", field: "firstName" },
        { title: "Email", field: "email" },
        { title: "Parent Name", field: "parentName" },
        { title: "Parent Phone Number", field: "parentPhoneNumber" },
    ];

    const downLoadPdf = () => {
        const doc = new jsPDF();
        doc.text("Student List", 20, 10);
        doc.autoTable({
            columns: columns.map((col) => ({
                ...col,
                dataKey: col.field,
            })),
            body: students,
        });
        doc.save("Student List");
    };

    return (
        <div className="p-26">
            <div className=" items-center justify-center bg-white">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible">
                        <div className=" bg-gray-100">
                            <Tooltip
                                title="Dowload Student Sheet"
                                placement="top">
                                <button
                                    onClick={downLoadPdf}
                                    className="bg-transparent border-green-600 py-2 px-2 rounded-lg m-4 transition ease-in-out delay-75 hover:scale-95 transform-gpu">
                                    <FaDownload className="DownloadIcon" />
                                    {/* <span className="text-green-600">Download</span> */}
                                </button>
                            </Tooltip>
                            <div className="overflow-auto rounded-lg shadow">
                                <table className="w-full">
                                    <thead className="bg-green-200 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Action
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Student Name
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                DOB
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Parent Name
                                            </th>
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Parent Phone Number
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((s) => (
                                            <tr className="bg-green-100 lg:text-black">
                                                <td className="p-3">
                                                    <Tooltip
                                                        title="Update Student Details"
                                                        placement="top">
                                                        <i className="material-icons-outlined text-base">
                                                            <EditOutlined
                                                                className="text-yellow-400 mx-2 hover:text-yellow-500"
                                                                onClick={() =>
                                                                    updateStudent(
                                                                        s._id,
                                                                        s.firstName,
                                                                        s.lastName,
                                                                        s.birthday,
                                                                        s.NIC,
                                                                        s.phoneNumber,
                                                                        s.email,
                                                                        s.school,
                                                                        s.grade,
                                                                        s.medium,
                                                                        s.parentName,
                                                                        s.parentPhoneNumber,
                                                                        s.parentEmail,
                                                                        s.studentGender,
                                                                        s.parentAddress,
                                                                        s.parentOccupation,
                                                                        s.imageURL,
                                                                        s.subject,
                                                                        s.teacher,
                                                                        s.OL_Year,
                                                                        s.AL_Year,
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
                                                                                    deleteStudent(
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
                                                    {
                                                        s.birthday.split(
                                                            "T",
                                                        )[0]
                                                    }
                                                </td>
                                                <td className="p-3 ">
                                                    {s.parentName}
                                                </td>
                                                <td className="p-3 ">
                                                    {s.parentPhoneNumber}
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
        </div>
    );
}
