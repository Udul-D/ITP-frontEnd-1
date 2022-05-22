import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Requests from "../Teachers/Request/List";

const Dashboard = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    const id = localStorage.getItem("roleID");
    console.log("RoleID: " + id);

    const ProfileNav = () => {
        navigate("/student/profile/" + id);
    };

    let navigate = useNavigate();

    const AddRequest = () => {
        navigate("/teacher/request/add");
    };

    const TimetableList = () => {
        navigate("/timetable");
    };

    const AddExam = () => {
        navigate("/teacher/exam/add");
    };

    const Requests = () => {
        navigate("/requests");
    };

    const EventList = () => {
        navigate("/events");
    };

    const AddTutorial = () => {
        navigate("/tutorial/add");
    };

    return (
        <div>
            <div className="my-10 flex flex-row">
                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={ExamImg}
                        className="mt-4 h-28 w-36"
                        alt="exams"
                    />
                    <button
                        onClick={ExamsNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Exams
                    </button>
                </div>

            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">Home</h1>
            </div>

            <div className=" my-10">
                <div>
                    <button
                        class="bg-green-600 mx-40 mt-4 hover:bg-green-700 text-white font-bold py-10 px-20 rounded"
                        onClick={TimetableList}>
                        Time Table
                    </button>

                    <button
                        class="bg-green-600 mx- mt-4 hover:bg-green-700 text-white font-bold py-10 px-20 rounded"
                        onClick={AddExam}>
                        Exams
                    </button>
                    <button
                        class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-10 px-24 rounded"
                        onClick={AddTutorial}>
                        Tutorial
                    </button>
                </div>
                <div>
                    <button
                        class="bg-green-600 mx-40 mt-4 hover:bg-green-700 text-white font-bold py-10 px-24 rounded"
                        onClick={EventList}>
                        Events
                    </button>

                    <button
                        class="bg-green-600 mx- mt-2 hover:bg-green-700 text-white font-bold py-10 px-24 rounded"
                        onClick={AddRequest}>
                        Request
                    </button>
                    <button
                        class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-10 px-20 rounded"
                        onClick={Requests}>
                        My Request
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Dashboard;
