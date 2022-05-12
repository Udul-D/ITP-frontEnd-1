import React, { useState, useEffect } from "react";
import ExamCard from "../../../components/Exam-Card";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";
import Footer from "../../../components/Footer/Footer";
import Notification from "../../../components/Notification/index";
import { useLocation } from "react-router-dom";
const ExamList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [exams, setExams] = useState([]);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    useEffect(() => {
        const fetchExams = async () => {
            const res = await axios.get("/api/exam/all");

            setExams(res.data);
            console.log(res.data);
        };
        fetchExams();
    }, []);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Exams
            </h1>
            <div className="w-full py-10 pl-28 gap-4 flex-wrap flex justify-start">
                {exams.map((exam) => (
                    <ExamCard exam={exam} />
                ))}
            </div>
            <Notification notify={notify} setNotify={setNotify} />
            <Footer />
        </>
    );
};

export default ExamList;
