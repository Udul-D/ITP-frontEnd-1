import React, { useState } from "react";
import ExamCard from "../../../components/Exam-Card";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";

const ExamList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Exams
            </h1>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                <ExamCard />
                <ExamCard />
                <ExamCard />
            </div>
        </>
    );
};

export default ExamList;
