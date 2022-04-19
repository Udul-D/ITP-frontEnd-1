import React, { useState } from "react";
import HallTable from "../../../components/HallTable";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";

const HallList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div>
            <h1 className="text-black font-bold px-10 pt-5 mt-4 mb-6 text-5xl">
                Lecture Halls
            </h1>
                <HallTable/>
            </div>
            
        </>
    );
};

export default HallList;
