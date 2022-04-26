import React, { useState, useEffect } from "react";
import Result from "../../../components/Result-table";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";

const ResultList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    // const [results, setResults] = useState([]);

    // useEffect(() => {
    //     const fetchResult = async () => {
    //         const res = await axios.get("/api/result/all");
    //         setResults(res.data);
    //         console.log(res.data);
    //     };
    //     fetchResult();
    // }, []);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div>
                <h1 className="text-black font-bold px-10 pt-5 mt-4 mb-6 text-5xl">
                    Results
                </h1>
                <Result />
            </div>
        </>
    );
};

export default ResultList;
