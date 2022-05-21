import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import StudentList from "../../../components/StudentList/StudentList";
import Footer from "../../../components/Footer/Footer";
import Tooltip from "@material-ui/core/Tooltip";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./index.css";

const StudentLists = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/student/add`;
        navigate(path);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div>
                <h1 className="text-black font-bold px-6 pt-6 text-3xl">
                    Student List
                </h1>
                <p className="text-black text-xs px-6">
                    List of all the students including their name, date of
                    birth, parent name, parent phone number and age
                </p>
            </div>

            <div className="bg-[#dcdcdc] mt-2.5 w-screen">
                <button
                    onClick={routeChange}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full m-4 transition ease-in-out delay-75 hover:scale-95 transform-gpu">
                    <AiOutlineUserAdd className="AddUserIcon" />
                    <span>Add Student</span>
                </button>

                <Tooltip title="Dowload Student Sheet" placement="top">
                    <button className="bg-transparent border-green-600 py-2 px-2 rounded-lg m-4 transition ease-in-out delay-75 hover:scale-95 transform-gpu">
                        <FaDownload className="DownloadIcon" />
                        {/* <span className="text-green-600">Download</span> */}
                    </button>
                </Tooltip>

                <StudentList />
                <Footer />
            </div>
        </>
    );
};

export default StudentLists;
