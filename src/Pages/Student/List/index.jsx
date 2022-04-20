import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { AiOutlineUserAdd } from "react-icons/ai";
import StudentList from "../../../components/StudentList/StudentList";
import "./index.css";

const StudentLists = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
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
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full m-4 transition ease-in-out delay-75 hover:scale-95 transform-gpu">
                    {/* transition ease-out delay-150 */}
                    <AiOutlineUserAdd className="AddUserIcon" />
                    <span>Add Student</span>
                </button>

                <StudentList />
            </div>
        </>
    );
};

export default StudentLists;
