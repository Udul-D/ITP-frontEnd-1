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
    HallList,
    ResultList,
    StudentResult,
    RequestAdminViewList,
    TutorialList,
    AddExam,
    AddHall,
    AddRequest,
    AddEvent,
    TimetableList,
    AddStudent,
    AddTeacher,
    AddTutorial,
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
                            path="/admin/hall/add"
                            element={<AddHall />}
                        />

                        <Route
                            path="/teacher/request/add"
                            element={<AddRequest />}
                        />
                        <Route path="/admin/event/add"
                        element={<AddEvent />} />

                        <Route
                            path="/student/add"
                            element={<AddStudent />}
                        />
                        <Route  path="/student/add"
                            element={<AddStudent />}
                            />
                        <Route  path="/teachers/add"
                            element={<AddTeacher />}
                            />
                        <Route path="tutorial/add"
                            element={<AddTutorial />}
                            />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
