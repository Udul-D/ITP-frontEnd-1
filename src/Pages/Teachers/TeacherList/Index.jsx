import React, { useState,useEffect } from "react";
import axios from "axios";

import TeacherCard from "../../../components/TeacherCard/TeacherList";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";

const TeacherList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        getTeachers();
    }, []);

    const getTeachers = async (id) =>{
        try {
            const res = await axios.get(`/api/teacher/all`);
            console.log("Teachers :",res)
            setTeachers(res.data)
        } catch (error) {
            console.log(error)            
        }
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Our Teachers
            </h1>
            <div className="w-full p-10 gap-4 flex-wrap flex justify-start">
                {teachers.map((teacher)=>(
                    <><TeacherCard teacher ={teacher}/></>
                ))}
                
            </div>
            <Footer/>
        </>
    );
};

export default TeacherList;