import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import isFuture from "date-fns/isFuture";
import getDate from "date-fns/getDate";
import Notification from "..//Notification/index";
import ConfirmDialog from "../ConfirmDialog/index";
import {
    EyeOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { id } from "date-fns/locale";

export default function EventCard({ event }) {
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

    let navigate = useNavigate();

    
    const callEvent = (id) => {
        console.log("clicked");
        navigate("/events/start/" + id, {
            state : {
                eventName: event.eventName,
                description: event.description,
                eventDate: event.eventDate,
                time: event.time,
                Venue: event.Venue,

            },
        });
    };

    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100 p-10">
                <div className=""></div>
                <img
                    className="h-40 w-full object-cover rounded-lg"
                    src="https://21mbu63kam0h2kj3iy24qk18-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Lecture-Hall.jpg"
                    alt=""
                />

                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2">
                        {event.eventName}
                    </h2>
                    <p className="text-sm text-justify text-gray-600">
                        {event.description}
                    </p>
                </div>
                <div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Date: {event.eventDate.split("T")[0]}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Time: {event.time}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Venue: {event.Venue}
                        </span>
                    </div>
                </div>
            </div>
            <a>
                <button
                    className="bg-green-600 w-full text-white font-bold py-2 px-4 rounded-b-lg"
                    onClick={() => callEvent(event._id)}>
                    View
                </button>
            </a>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    );
}
