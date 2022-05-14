import React from "react";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import Footer from "../Footer/Footer";

export default function AdminList() {
    return (
        <div classNameName="p-26">
            <div className=" items-center justify-center mb-10 bg-white">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible"></div>
                    <div className="p-5 bg-gray-100 ">
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
                                            Emai
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
                                            Udul Dulsara
                                        </td>
                                        <td className="p-3">199567895953</td>
                                        <td className="p-3">
                                            076 5678945
                                        </td>
                                        <td className="p-3">
                                            udulsara@gmail.com
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
                                            Udul Dulsara
                                        </td>
                                        <td className="p-3">199567895953</td>
                                        <td className="p-3">
                                            076 5678945
                                        </td>
                                        <td className="p-3 ">
                                            udulsara@gmail.com
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
                                            Udul Dulsara
                                        </td>
                                        <td className="p-3">199567895953</td>
                                        <td className="p-3">
                                            076 5678945
                                        </td>
                                        <td className="p-3">
                                            udulsara@gmail.com
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
