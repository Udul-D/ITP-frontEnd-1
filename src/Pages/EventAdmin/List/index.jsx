import React, { useState } from "react";
import EventAdminTable from "../../../components/EventAdminTable";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";

const EventAdminViewList = () => {
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
                    Events
                </h1>
                <EventAdminTable />
            </div>
            <Footer />
        </>
    );
};

export default EventAdminViewList;
