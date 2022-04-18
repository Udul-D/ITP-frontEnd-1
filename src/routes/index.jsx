import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    ExamList,
    Home,
    EventList,
    InventoryList,
    EventAdminViewList,
    StudentList,
    TeacherList,
    Requests,
} from "../Pages";

import LoginPage from "../Pages/Login";


export const PageRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/exams" element={<ExamList />} />
                        <Route path="/teachers" element={<TeacherList/>}/>
                        <Route
                            path="/studentlist"
                            element={<StudentList />}
                        />
                        <Route path="/events" element={<EventList />} />
                        <Route path="/inventory" element={<InventoryList />}/>
                        <Route path="/admin/events" element={<EventAdminViewList />}/>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/requests" element={< Requests/>} />

                    </Routes>
                    
                </div>
            </BrowserRouter>
        </div>
    );
};
