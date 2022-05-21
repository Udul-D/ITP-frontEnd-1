import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Event() {
    //const [eventDetails, setEventDetails] = useState([]);
    const [event, setEvents] = useState([]);
    const [updateClicked, setUpdateClicked] = useState(false);
    const [eventName, setEventName] = useState("");
    const [selectDate, setSelectDate] = useState(null);
    const [time, setTime] = useState("");
    const [venue, setVenue] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

    //useEffect(() => {
    //const getallEventDetails = async () => {
    //const response = await axios.get("/api/event/all");
    // setEventDetails(response.data);
    // console.log(response.data);
    // };
    // getallEventDetails();
    // }, []);
    useEffect(() => {
        const fetchEvent = async () => {
            const res = await axios.get("/api/event/all");
            setEvents(res.data);
            console.log(res.data);
        };
        fetchEvent();
    }, []);
    let navigate = useNavigate();

    const addEvent = () => {
        const path = `/admin/event/add`;
        navigate(path);
    };

    const handleDelete = async (id, e) => {
        e.preventDefault();
        axios
            .delete(`/api/event/delete/${id}`, {
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
        eventName,
        selectDate,
        time,
        venue,
        description,
        tags,
    ) => {
        navigate(`/admin/event/update/${id}`, {
            state: {
                eventName: eventName,
                eventDate: selectDate,
                time: time,
                Venue: venue,
                description: description,
                tags: tags,
            },
        });
    };

    const columns = [
        { title: "Event Name", field: "eventName" },
        { title: "Date", field: "eventDate" },
        { title: "Time", field: "time" },
        { title: "Venue", field: "Venue" },
        { title: "Description", field: "description" },
    ];

    const downLoadPdf = () => {
        const doc = new jsPDF();
        doc.text(eventName + " Event Sheet", 20, 10);
        doc.autoTable({
            columns: columns.map((col) => ({
                ...col,
                dataKey: col.field,
            })),
            body: event,
        });
        doc.save(eventName + " Event Sheet");
    };

    return (
        <div className="p-26">
            <div class=" items-center justify-center min-h-screen bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                            <a href="/admin/event/add">
                                <button
                                    class="
                                        bg-green-600
                                        hover:bg-green-800
                                        text-white
                                        py-1
                                        px-3
                                        sm
                                        font-bold
                                        rounded-full mb-3
                                    "
                                    onClick={addEvent}>
                                    ADD NEW EVENT
                                </button>
                            </a>
                        <button
                                            className="bg-green-600
                                            hover:bg-green-800
                                            text-white
                                            py-2
                                            px-5
                                            flex
                                            sm                                          
                                            outline-none
                                            font-bold
                                            rounded-full mb-3"
                                            onClick={() => downLoadPdf()}>
                                            <span>
                                                <span>
                                                    <DownloadOutlined className="font-bold" />{" "}
                                                </span>
                                                Download
                                            </span>
                                        </button>                    
                                        </div>
                        </div>



                    <table class="w-full">
                        <thead class="bg-green-200 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-bold tracking-wide text-left">
                                    Action
                                </th>
                                <th class="p-3 text-sm font-bold tracking-wide text-left">
                                    Event Name
                                </th>
                                <th class="p-3 text-sm font-bold tracking-wide text-left">
                                    Date
                                </th>
                                <th class="p-3 text-sm font-bold tracking-wide text-left">
                                    Time
                                </th>
                                <th class="p-3 text-sm font-bold tracking-wide text-left">
                                    Venue
                                </th>
                                <th class="p-3 text-sm font-bold tracking-wide text-left">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {event.map((event) => (
                                <tr class="bg-green-100 lg:text-black">
                                    <td class="p-5">
                                        <a>
                                            
                                        </a>
                                        <a>
                                            <i class="material-icons-outlined text-base">
                                                <EditOutlined
                                                    className="text-yellow-400 mx-2 hover:text-yellow-500"
                                                    onClick={(e) =>
                                                        handleUpdate(
                                                            event._id,
                                                            e,
                                                            event.eventName,
                                                            event.eventDate,
                                                            event.time,
                                                            event.Venue,
                                                            event.description,
                                                            event.tags,
                                                        )
                                                    }
                                                />
                                            </i>
                                        </a>
                                        <a className="text-red-400 ml-2 hover:text-red-500">
                                            <i class="material-icons-round text-base">
                                                <DeleteOutlined
                                                    onClick={(e) =>
                                                        handleDelete(
                                                            event._id,
                                                            e,
                                                        )
                                                    }
                                                />
                                            </i>
                                        </a>
                                        {updateClicked && (
                                            <button
                                                onClick={handleUpdate}
                                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-10 rounded">
                                                Update
                                            </button>
                                        )}
                                    </td>
                                    <td class="p-3 font-medium capitalize">
                                        {updateClicked ? (
                                            <input
                                                type="text"
                                                value={eventName}
                                                className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                onChange={(e) =>
                                                    setEventName(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        ) : (
                                            <span>{event.eventName}</span>
                                        )}
                                    </td>
                                    <td class="p-3">
                                        {updateClicked ? (
                                            <input
                                                type="text"
                                                value={selectDate}
                                                className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                onChange={(e) =>
                                                    setSelectDate(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        ) : (
                                            <span>{event.eventDate.split("T")[0]}</span>
                                        )}
                                    </td>
                                    <td class="p-3 uppercase pl-8">
                                        {updateClicked ? (
                                            <input
                                                type="text"
                                                value={time}
                                                onChange={(e) =>
                                                    setTime(e.target.value)
                                                }
                                                className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                            />
                                        ) : (
                                            <span>{event.time}</span>
                                        )}
                                    </td>
                                    <td class="p-3 font-medium capitalize">
                                        {updateClicked ? (
                                            <input
                                                type="text"
                                                value={venue}
                                                className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                onChange={(e) =>
                                                    setVenue(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        ) : (
                                            <span>{event.Venue}</span>
                                        )}
                                    </td>
                                    <td class="p-3 font-medium capitalize">
                                        {updateClicked ? (
                                            <input
                                                type="text"
                                                value={description}
                                                className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        ) : (
                                            <span>
                                                {event.description}
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
    );
}
