import React, { useState } from "react";
import Header from "../../components/Header/Header";
import RegisterForm from "../../components/Register/RegisterForm";
import Sidebar from "../../components/Sidebar/Sidebar";

const RegisterPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

            <RegisterForm />
        </>
    );
};

export default RegisterPage;
