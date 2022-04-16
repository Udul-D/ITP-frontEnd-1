import React, { useState } from "react";
import TeacherCard from "../../../components/Teacher/TeacherCard/TeacherList";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";

const TeacherList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Teacher List
            </h1>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
            </div>
        </>
    );
};

export default TeacherList;