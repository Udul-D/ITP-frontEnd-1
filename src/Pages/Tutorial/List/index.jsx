import React, { useState } from "react";
import TutorialCard from "../../../components/Tutorial-Card/index";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";

const TutorialList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Tutorials
            </h1>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
            </div>
            <Footer/>
        </>
    );
};

export default TutorialList;