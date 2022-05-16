import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function Timetable() {
    const [timetable, setTimetable] = useState([]);
    const [selectDate, setSelectDate] = useState(null);
    const [updateClicked, setUpdateClicked] = useState(false);
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [hallNumber, setHallNumber] = useState("");
    const [time, setTime] = useState("");
    const [classType, setClassType] = useState("");
    const [medium, setMedium] = useState("");
    const [floorNumber, setFloorNumber] = useState("");

    useEffect(() => {
        const fetchTimetable = async () => {
            const res = await axios.get("/api/timetable/all");
            setTimetable(res.data);
            console.log(res.data);
        };
        fetchTimetable();
    }, []);
    let navigate = useNavigate();

    const addTimetable = () => {
        const path = `/admin/timetable/add`;
        navigate(path);
    };

    const handleDelete = async (id, e) => {
        e.preventDefault();
        axios
            .delete(`/api/timetable/delete/${id}`, {
                headers: { authToken: localStorage.getItem("authToken") },
            })
            .then((res) => {
                console.log("deleted");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleUpdate = async (
        id,
        e,
        subject,
        grade,
        teacherName,
        hallNumber,
        selectDate,
        time,
        classType,
        medium,
        floorNumber,

    ) => {
        navigate(`/admin/timetable/update/${id}`, {
            state: {
            subject: subject,
            grade: grade,
            date: selectDate,
            teacherName: teacherName,
            hallNumber: hallNumber,
            time: time,
            classType: classType,
            medium: medium,
            floorNumber: floorNumber,
            },
        });
    };

    return (
        <div className="p-26">
            <div class=" items-center justify-center min-h-screen bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                            <div className="pb-4">
                                
                                <div className="flex">
                                    <button
                                        class="
                                            bg-green-600
                                            hover:bg-green-800
                                            text-white
                                            py-1
                                            px-3
                                            flex
                                            sm
                                            rounded-full mb-3"
                                        onClick={addTimetable}>
                                        ADD TIMETABLE
                                    </button>
                                </div>
                            </div>

                            <table class="w-full pt-4">
                                <thead class="bg-green-200 border-b-2 border-gray-200">
                                    <tr>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Action
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Subject
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Grade
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Date
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Teacher Name
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Hall Number
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Time
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Class Type
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Medium
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Floor Number
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {timetable.map((r) => (
                                        <tr class="bg-green-100 lg:text-black">
                                            <td class="p-3">
                                                <a
                                                    href="#"
                                                    class="text-gray-500 hover:text-gray-100 mr-2 px-2">
                                                    <i class="material-icons-outlined text-base">
                                                        <EyeOutlined />
                                                    </i>
                                                </a>
                                                <a class="text-yellow-400 hover:text-gray-100 mx-2 px-2">
                                                    <i class="material-icons-outlined text-base">
                                                        <EditOutlined
                                                            onClick={(e) =>
                                                                handleUpdate(
                                                                    r._id,
                                                                    e,
                                                                    r.subject,
                                                                    r.grade,
                                                                    r.selectDate,
                                                                    r.teacherName,
                                                                    r.hallNumber,
                                                                    r.time,
                                                                    r.classType,
                                                                    r.medium,
                                                                    r.floorNumber,
                                                                )
                                                            }
                                                        />
                                                    </i>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="text-red-400 hover:text-gray-100 ml-2 px-2">
                                                    <i class="material-icons-round text-base">
                                                        <DeleteOutlined
                                                            onClick={(e) =>
                                                                handleDelete(
                                                                    r._id,
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </i>
                                                </a>
                                                {updateClicked && (
                                                    <button
                                                        onClick={
                                                            handleUpdate
                                                        }
                                                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-10 rounded">
                                                        Update
                                                    </button>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={subject}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setSubject(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.subject}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={grade}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setGrade(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.grade}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3">
                                                {updateClicked ? (
                                                    <input
                                                        type="date"
                                                        value={selectDate}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setSelectDate(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.selectDate}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={teacherName}
                                                        onChange={(e) =>
                                                            setTeacherName(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                    />
                                                ) : (
                                                    <span>{r.teacherName}</span>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={hallNumber}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setHallNumber(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.hallNumber}
                                                    </span>
                                                )}
                                            </td>
                                            
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={time}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setTime(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.time}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={classType}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setClassType(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.classType}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={medium}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setMedium(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.medium}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={floorNumber}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setFloorNumber(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.floorNumber}
                                                    </span>
                                                )}
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}