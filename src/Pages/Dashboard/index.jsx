import React, { useState } from "react";
import TimeTableImg from "../../Assets/Images/pngegg.png";
import ExamImg from "../../Assets/Images/Exam-Vector-Transparent-File.png";
import TutorialImg from "../../Assets/Images/—Pngtree—laptop player screen tutorial video_4898419.png";
import ExmResultsImg from "../../Assets/Images/result-g5ebf724bf_1280.png";
import EventsImg from "../../Assets/Images/kindpng_7529367.png";
import ProfileImg from "../../Assets/Images/profile.png";
import myRequest from "../../Assets/Images/myRequest.png";
import request from "../../Assets/Images/request.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const id = localStorage.getItem("roleID");
    console.log("RoleID: " + id);

    const AddRequest = () => {
        navigate("/teacher/request/add");
    };

    const Request = () => {
        navigate("/requests");
    };

    const ExamsNav = () => {
        navigate("/exams");
    };

    const EventsNav = () => {
        navigate("/events");
    };

    const TimetableNav = () => {
        navigate("/timetable");
    };

    const TutorialNav = () => {
        navigate("/tutorials");
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

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

                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={TimeTableImg}
                        className="mt-4 h-28 w-36"
                        alt="timetable"
                    />
                    <button
                        onClick={TimetableNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Time Table
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={TutorialImg}
                        className="mt-4 h-28 w-36"
                        alt="tutorial"
                    />
                    <button 
                        onClick={TutorialNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Tutorial
                    </button>
                </div>
            </div>

            <div className="my-10 mt-16 flex flex-row ">
                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={EventsImg}
                        className="mt-4 h-28 w-36"
                        alt="evnts"
                    />
                    <button
                        onClick={EventsNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-[75px] rounded">
                        Events
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={request}
                        className="mt-4 h-28 w-36"
                        alt="exams"
                    />
                    <button
                        onClick={AddRequest}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Request
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={myRequest}
                        className="mt-4 h-28 w-36"
                        alt="profile"
                    />
                    <button
                        onClick={myRequest}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        My Requests
                    </button>
                </div>

                {/* <div className="flex flex-row bg-gray-300 w-80 mx-10 rounded">
                    <img src={TutorialImg} className="mt-4 h-28 w-36" />
                    <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Tutorial
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-10 rounded">
                    <img src={ExmResultsImg} className="mt-4 h-28 w-36" />
                    <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Exam Results
                    </button>
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
