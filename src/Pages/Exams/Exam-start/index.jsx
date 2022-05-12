import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";

function ExamStart() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    let sec = location.state.duration;
    const examName = location.state.examName;
    const time = location.state.time;
    console.log(examName);
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(59);
    const [hours, setHours] = useState(sec - 1);
    let timer;
    // setSeconds(59);

    useEffect(() => {
        timer = setInterval(() => {
            if (minutes === 0 && seconds === 0 && hours === 0) {
                clearInterval(timer);
            } else if (seconds === 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (minutes === 0 && seconds === 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

            <div>
                <div className="mx-96 w-1/2 mt-12">
                    <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                        <div className="text-center py-5">
                            <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                                <h1 className="font-bold text-5xl text-black">
                                    {examName}
                                </h1>

                                <div className="text-center py-5">
                                    <h1 className="font-bold text-5xl text-green-600">
                                        {hours < 10 ? "0" + hours : hours}:
                                        {minutes < 10
                                            ? "0" + minutes
                                            : minutes}
                                        :
                                        {seconds < 10
                                            ? "0" + seconds
                                            : seconds}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExamStart;
