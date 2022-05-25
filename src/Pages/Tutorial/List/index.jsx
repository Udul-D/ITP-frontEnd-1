/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import TutorialCard from "../../../components/Tutorial-Card/index";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";
import Notification from "../../../components/Notification/index";
import { useLocation, useNavigate } from "react-router-dom";
import {DownloadOutlined} from "@ant-design/icons";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TutorialList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [tutorials, setTutorials] = useState([]);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    })

    useEffect(() => {
        const fetchTutorials = async () => {
            const res = await axios.get("/api/tutorial/all");
            setTutorials(res.data);
            console.log(res.data);
        };
        fetchTutorials();
    }, []);

    const AddTutorial = () => {
        navigate("/tutorial/add");
    };

    const columns = [
        {title: "Tutorial Name", field: "tutorialName" },
        {title: "Subject", field: "subject"},
        {title: "Grade", field: "grade"},
        {title: "Teacher Name", field: "teacherName"},
        {title: "Lesson Name", field: "lessonName"},
    ];

    const downLoadPdf = () => {
        const doc = new jsPDF();
        doc.text("Tutorial Report", 20, 10);
        doc.autoTable({
            columns: columns.map((col) => ({
                ...col,
                dataKey: col.field,
            })),
            body: tutorials,
        });
        doc.save("Tutorial Report");
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="flex justify-between">
                <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Tutorials
                </h1>
                {localStorage.getItem("role") === "teacher" ? (
                        <button
                            class="
                            bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 flex sm rounded-full mb-3 mt-5"
                            onClick={AddTutorial}>
                            Add New Tutorial
                        </button>
                    ) : (
                        <div></div>
                )}
                <button
                    className="bg-green-600
                    hover:bg-green-800
                    text-white
                    py-1
                    px-5
                    flex
                    sm
                    ml-10
                    mr-4
                    mt-5
                    outline-none
                    font-bold
                    rounded-full mb-3"
                    onClick={() => downLoadPdf()}>
                    <span>
                        <span>
                            <DownloadOutlined className="font-bold" />{" "}
                        </span>
                        Download Tutorial Report
                    </span>
                </button>
                                            
            </div>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                {tutorials.map((tutorial) => (
                    <TutorialCard tutorial={tutorial} />
                ))}
            </div>
            <Notification notify={notify} setNotify={setNotify} />
            <Footer/>
        </>
    );
};

export default TutorialList;