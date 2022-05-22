import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudent = async () => {
            const res = await axios.get("api/student/all");
            setStudents(res.data);
            console.log(res.data);
        };
        fetchStudent();
    }, []);

    const deleteStudent = async (id) => {
        await axios.delete(`api/student/delete/${id}`);
        alert("deleted");
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
                                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                                Age
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((s) => (
                                            <tr className="bg-green-100 lg:text-black">
                                                <td className="p-3">
                                                    <a href="#">
                                                        <i className="material-icons-outlined text-base">
                                                            <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                        </i>
                                                    </a>
                                                    <a href="/">
                                                        <i className="material-icons-outlined text-base">
                                                            <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                        </i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="material-icons-round text-base">
                                                            <DeleteOutlined
                                                                className="text-red-400 ml-2 hover:text-red-500"
                                                                onClick={() =>
                                                                    deleteStudent(
                                                                        s._id,
                                                                    )
                                                                }
                                                            />
                                                        </i>
                                                    </a>
                                                </td>
                                                <td className="p-3 font-medium capitalize">
                                                    {s.firstName +
                                                        " " +
                                                        s.lastName}
                                                </td>
                                                <td className="p-3">
                                                    {s.birthday}
                                                </td>
                                                <td className="p-3 uppercase">
                                                    {s.parentName}
                                                </td>
                                                <td className="p-3 uppercase">
                                                    {s.parentPhoneNumber}
                                                </td>
                                                <td className="p-3 uppercase">
                                                    20
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
        </div>
    );
}
