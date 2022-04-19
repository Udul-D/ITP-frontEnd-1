import React, { useState } from "react";

import RequestList from "../../../../components/RequestTable/index";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import Sidebar from "../../../../components/Sidebar/Sidebar";


const Requests = () => {
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
                My Requests
            </h1>
                <RequestList/>
            </div>
            <Footer/>
        </>
        
    );
};

export default Requests;