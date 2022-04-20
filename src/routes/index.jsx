import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { ExamList, Home, EventList } from "../Pages";
import {
    ExamList,
    Home,
    EventList,
    InventoryList,
    EventAdminViewList,
    StudentList,
    TeacherList,
    Requests,
    HallList,
    ResultList,
    StudentResult,
    RequestAdminViewList,
    TutorialList,
    AddExam,
    TimetableList,
    AddTimetable,
    AddInventory,
    AddStudent,
} from "../Pages";

import LoginPage from "../Pages/Login";


export const PageRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/exams" element={<ExamList />} />
                        <Route
                            path="/teachers"
                            element={<TeacherList />}
                        />
                        <Route
                            path="/studentlist"
                            element={<StudentList />}
                        />
                        <Route path="/events" element={<EventList />} />

                        <Route path="/inventory" element={<InventoryList />} />
                        <Route path="/timetable" element={<TimetableList />} />
                        <Route
                            path="/inventory"
                            element={<InventoryList />}
                        />
                        <Route
                            path="/admin/events"
                            element={<EventAdminViewList />}
                        />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/requests" element={<Requests />} />
                        <Route path="/hall" element={<HallList />} />
                        <Route path="/requests" element={<Requests />} />
                        <Route
                            path="/teacher/results"
                            element={<ResultList />}
                        />
                        <Route
                            path="/student/results"
                            element={<StudentResult />}
                        />
                        <Route path="/admin/requests" element={<RequestAdminViewList />}/>
                        <Route
                            path="/tutorials"
                            element={<TutorialList />}
                        />
                        <Route
                            path="/teacher/exam/add"
                            element={<AddExam />}
                        />
                        <Route

                            path="/admin/timetable/add"
                            element={<AddTimetable />}
                        />
                        <Route
                            path="/admin/inventory/add"
                            element={<AddInventory />}

                            path="/student/add"
                            element={<AddStudent />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
