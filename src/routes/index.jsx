import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { ExamList, Home ,TeacherList } from "../Pages";
=======
import { ExamList, Home, EventList } from "../Pages";
import { ExamList, Home, InventoryList} from "../Pages";

>>>>>>> aa57374f8966e9593092b1d81ee5d739fc9b537c
export const PageRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/exams" element={<ExamList />} />
<<<<<<< HEAD
                        <Route path="/teacher" element={<TeacherList/>}/>
=======
                        <Route path="/events" element={<EventList />} />
                        <Route path="/inventory" element={<InventoryList />} />
>>>>>>> aa57374f8966e9593092b1d81ee5d739fc9b537c
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
