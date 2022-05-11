import React, { useState, useEffect } from "react";
import ExamCard from "../../../components/Exam-Card";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";
const ExamList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [exams, setExams] = useState([]);

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
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                {exams.map((exam) => (
                    <ExamCard exam={exam} />
                ))}
            </div>
        </>
    );
};

export default ExamList;
