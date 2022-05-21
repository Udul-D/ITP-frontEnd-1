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
    AddAdmin,
    AddHall,
    AddRequest,
    AddEvent,
    TimetableList,
    AddTimetable,
    AddInventory,
    AddStudent,
    AdminList,
    AddTeacher,
    AddTutorial,
    AddResult,
    UpdateEvent,
    UpdateResult,
    UpdateExam,
    ExamStart,
    UpdateRequest,
    Dashboard,

} from "../Pages";

import LoginPage from "../Pages/Login";
import UpdateTutorial from "../Pages/Tutorial/Update";

export const PageRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
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
                        <Route
                            path="/inventory"
                            element={<InventoryList />}
                        />
                        <Route
                            path="/timetable"
                            element={<TimetableList />}
                        />
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
                            path="/teacher/results/:id"
                            element={<ResultList />}
                        />
                        <Route
                            path="/student/results/:id"
                            element={<StudentResult />}
                        />
                        <Route
                            path="/admin/requests"
                            element={<RequestAdminViewList />}
                        />
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
                        <Route
                            path="/admin/event/add"
                            element={<AddEvent />}
                        />
                        <Route
                            path="/admin/timetable/add"
                            element={<AddTimetable />}
                        />
                        <Route
                            path="/admin/inventory/add"
                            element={<AddInventory />}
                        />
                        <Route path="/admin" element={<AdminList />} />
                        <Route
                            path="/student/add"
                            element={<AddStudent />}
                        />
                        <Route path="/admin/add" element={<AddAdmin />} />
                        <Route
                            path="/student/add"
                            element={<AddStudent />}
                        />
                        <Route
                            path="/teachers/add"
                            element={<AddTeacher />}
                        />
                        <Route
                            path="/tutorial/add"
                            element={<AddTutorial />}
                        />
                        <Route
                            path="/teacher/result/add/:id"
                            element={<AddResult />}
                        />
                        <Route
                            path="/teacher/result/update/:id"
                            element={<UpdateResult />}
                        />
                        <Route
                            path="/teacher/exam/update/:id"
                            element={<UpdateExam />}
                        />
                        <Route
                            path="/teacher/request/update/:id"
                            element={<UpdateRequest />}
                        />
                        <Route
                            path="exam/start/:id"
                            element={<ExamStart />}
                        />
                        <Route
                            path="/tutorial/update/:id"
                            element={<UpdateTutorial />}
                        />
                        <Route
                            path="/admin/event/update/:id"
                            element={<UpdateEvent />}
                            />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
