import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExamList, Home ,TeacherList } from "../Pages";
export const PageRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/exams" element={<ExamList />} />
                        <Route path="/teacher" element={<TeacherList/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
