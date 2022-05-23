import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Dashboard from "../../../components/AdminDashboard/dashboard";

const AdminDashboard = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <Dashboard />
            <Footer />
        </div>
    );
};

export default AdminDashboard;
