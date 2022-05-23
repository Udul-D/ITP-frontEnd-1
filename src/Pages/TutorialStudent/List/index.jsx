/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import TutorialCardStudent from "../../../components/Tutorial-Card-Student/index";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";
import Notification from "../../../components/Notification/index";
import { useLocation, useNavigate } from "react-router-dom";

const TutorialStudentList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [tutorials, setTutorials] = useState([]);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    })

    useEffect(() => {
        const fetchTutorials = async () => {
            const res = await axios.get("/api/tutorial/all");
            setTutorials(res.data);
            console.log(res.data);
        };
        fetchTutorials();
    }, []);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="flex justify-between">
                <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Tutorials
                </h1>                            
            </div>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                {tutorials.map((tutorial) => (
                    <TutorialCardStudent tutorial={tutorial} />
                ))}
            </div>
            <Notification notify={notify} setNotify={setNotify} />
            <Footer/>
        </>
    );
};

export default TutorialStudentList;