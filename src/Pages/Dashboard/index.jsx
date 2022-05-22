import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Navigate, useNavigate } from "react-router-dom";
>>>>>>> f5f2fca311b17dfbf4178e4900f682c935cf11c5
import Requests from "../Teachers/Request/List";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
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
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

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
