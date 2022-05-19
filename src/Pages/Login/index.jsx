import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/Login/LoginForm";
import Sidebar from "../../components/Sidebar/Sidebar";

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

            <LoginForm />

            <Footer />
        </>
    );
};

export default LoginPage;
