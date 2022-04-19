import React from "react";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function StudentList() {
    return (
        <div classNameName="p-26">
            <div className=" items-center justify-center min-h-screen bg-white">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible"></div>
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
                                    <tr className="bg-green-100 lg:text-black">
                                        <td className="p-3">
                                            <a href="/">
                                                <i className="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="/">
                                                <i className="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="/">
                                                <i className="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td className="p-3 font-medium capitalize">
                                            Poorna Sankalana
                                        </td>
                                        <td className="p-3">2000/03/30</td>
                                        <td className="p-3 uppercase pl-8">
                                            P.R. Kanthi
                                        </td>
                                        <td className="p-3 uppercase">
                                            070 243 1416
                                        </td>
                                        <td className="p-3 uppercase">
                                            22
                                        </td>
                                    </tr>

                                    <tr className="bg-green-100 lg:text-black">
                                        <td className="p-3">
                                            <a href="/">
                                                <i className="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="/">
                                                <i className="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="/">
                                                <i className="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td className="p-3 font-medium capitalize">
                                            Poorna Sankalana
                                        </td>
                                        <td className="p-3">2000/03/30</td>
                                        <td className="p-3 uppercase pl-8">
                                            P.R. Kanthi
                                        </td>
                                        <td className="p-3 uppercase">
                                            070 243 1416
                                        </td>
                                        <td className="p-3 uppercase">
                                            22
                                        </td>
                                    </tr>

                                    <tr className="bg-green-100 lg:text-black">
                                        <td className="p-3">
                                            <a href="/">
                                                <i className="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="/">
                                                <i className="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="/">
                                                <i className="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td className="p-3 font-medium capitalize">
                                            Poorna Sankalana
                                        </td>
                                        <td className="p-3">2000/03/30</td>
                                        <td className="p-3 uppercase pl-8">
                                            P.R. Kanthi
                                        </td>
                                        <td className="p-3 uppercase">
                                            070 243 1416
                                        </td>
                                        <td className="p-3 uppercase">
                                            22
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
