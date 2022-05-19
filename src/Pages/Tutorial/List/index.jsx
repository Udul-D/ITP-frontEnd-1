import React, { useEffect, useState } from "react";
import TutorialCard from "../../../components/Tutorial-Card/index";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";
import Notification from "../../../components/Notification/index";
import { useLocation, useNavigate } from "react-router-dom";

const TutorialList = () => {
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

    const AddTutorial = () => {
        navigate("/tutorial/add");
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="flex justify-between">
                <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Tutorials
                </h1>
                {localStorage.getItem("role") === "teacher" ? (
                        <button
                            class="
                            bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 flex sm rounded-full mb-3 mr-10 mt-5"
                            onClick={AddTutorial}>
                            Add New Tutorial
                        </button>
                    ) : (
                        <div></div>
                )}
            </div>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                {tutorials.map((tutorial) => (
                    <TutorialCard tutorial={tutorial} />
                ))}
            </div>
            <Notification notify={notify} setNotify={setNotify} />
            <Footer/>
        </>
    );
};

export default TutorialList;