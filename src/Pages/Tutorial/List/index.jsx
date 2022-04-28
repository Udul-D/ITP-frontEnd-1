import React, { useEffect, useState } from "react";
import TutorialCard from "../../../components/Tutorial-Card/index";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";

const TutorialList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [tutorials, setTutorials] = useState([]);

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
            <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Tutorials
            </h1>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                {tutorials.map((tutorial) => (
                    <TutorialCard tutorial={tutorial} />
                ))}
            </div>
            <Footer/>
        </>
    );
};

export default TutorialList;