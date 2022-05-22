import React from "react";
import TimeTableImg from "../../Assets/Images/pngegg.png";
import ExamImg from "../../Assets/Images/Exam-Vector-Transparent-File.png";
import TutorialImg from "../../Assets/Images/—Pngtree—laptop player screen tutorial video_4898419.png";
import ExmResultsImg from "../../Assets/Images/result-g5ebf724bf_1280.png";
import EventsImg from "../../Assets/Images/kindpng_7529367.png";
import ProfileImg from "../../Assets/Images/profile.png";
import { useNavigate } from "react-router-dom";

const dashboard = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    const id = localStorage.getItem("roleID");
    console.log("RoleID: " + id);

    const ProfileNav = () => {
        navigate("/student/profile/" + id);
    };

    const ExamsNav = () => {
        navigate("/exams/");
    };

    const EventsNav = () => {
        navigate("/events/");
    };

    const TimetableNav = () => {
        navigate("/studentTimetable/");
    };

    const TutorialNav = () => {
        navigate("/tutorials/");
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
                        alt="tute"
                    />
                    <button
                        onClick={TutorialNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Tutorial
                    </button>
                </div>
            </div>

            <div className="my-10 mt-16 flex flex-row mx-[400px]">
                <div className="flex flex-row bg-gray-300 w-80 mx-0 mr-24 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={EventsImg}
                        className="mt-4 h-28 w-36"
                        alt="eevnts"
                    />
                    <button
                        onClick={EventsNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-[75px] rounded">
                        Events
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-0 ml-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={ProfileImg}
                        className="mt-4 h-28 w-36"
                        alt="profile"
                    />
                    <button
                        onClick={ProfileNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Student Profile
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
        </div>
    );
};

export default dashboard;
