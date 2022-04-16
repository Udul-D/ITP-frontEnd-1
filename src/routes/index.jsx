import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExamList, Home, EventList } from "../Pages";
export const PageRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/exams" element={<ExamList />} />
                        <Route path="/events" element={<EventList />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
