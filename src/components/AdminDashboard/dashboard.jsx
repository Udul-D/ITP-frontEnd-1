import React from "react";
import TimeTableImg from "../../Assets/Images/pngegg.png";
import HallImg from "../../Assets/Images/hall.png";
import InventoryImg from "../../Assets/Images/inventory.png";
import StudentImg from "../../Assets/Images/student.png";
import TeacherImg from "../../Assets/Images/teacher.png";
import EventsImg from "../../Assets/Images/kindpng_7529367.png";
import AdminImg from "../../Assets/Images/admin.png";
import { useNavigate } from "react-router-dom";

const Admindashboard = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    const id = localStorage.getItem("roleID");
    console.log("RoleID: " + id);

    const StudentListNav = () => {
        navigate("/students/");
    };

    const HallsNav = () => {
        navigate("/exams/");
    };

    const EventsNav = () => {
        navigate("/admin/events/");
    };

    const TimetableNav = () => {
        navigate("/timetable/");
    };

    const InventoryNav = () => {
        navigate("/inventory/");
    };

    const TeachersNav = () => {
        navigate("/teachers/");
    };

    const AdminNav = () => {
        navigate("/admin/");
    };

    return (
        <div>
            <div className="my-10 flex flex-row">
                <div className="flex flex-row bg-gray-300 w-80 mx-10 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={HallImg}
                        className="mt-4 h-28 w-36"
                        alt="exams"
                    />
                    <button
                        onClick={HallsNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Hall
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-10 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={TimeTableImg}
                        className="mt-4 h-28 w-36"
                        alt="timetable"
                    />
                    <button
                        onClick={TimetableNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Time Table
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-10 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={InventoryImg}
                        className="mt-4 h-28 w-36"
                        alt="tute"
                    />
                    <button
                        onClick={InventoryNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Inventory
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-10 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={EventsImg}
                        className="mt-4 h-28 w-36"
                        alt="eevnts"
                    />
                    <button
                        onClick={EventsNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-[75px] rounded">
                        Events
                    </button>
                </div>
            </div>

            <div className="my-10 mt-16 flex flex-row mx-[50px]">
                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        src={StudentImg}
                        className="mt-4 h-28 w-36"
                        alt="profile"
                    />
                    <button
                        onClick={StudentListNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Student List
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded">
                    <img
                        src={TeacherImg}
                        className="mt-4 h-28 w-36"
                        alt="teacher"
                    />
                    <button
                        onClick={TeachersNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Teacher List
                    </button>
                </div>

                <div className="flex flex-row bg-gray-300 w-80 mx-28 rounded">
                    <img
                        src={AdminImg}
                        className="mt-4 h-28 w-36"
                        alt="teacher"
                    />
                    <button
                        onClick={AdminNav}
                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-10 px-20 rounded">
                        Admin List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admindashboard;
