import React, { useState, useEffect } from "react";
import EventCard from "../../../components/Event-Card";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import Notification from "../../../components/Notification/index";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";

const EventList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [events, setEvents] = useState([]);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get("/api/event/all");
            setEvents(res.data);
            console.log(res.data);
        };
        fetchEvents();
    }, []);

    const addEvent = () => {
        navigate("/admin/event/add");
    };

    return (
        <>
<<<<<<< HEAD
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="flex justify-between">
                <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                    Your Events
                </h1>
                {localStorage.getItem("role") === "admin" ? (
                    <button
                        class="
                bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 flex sm rounded-full mb-3 mr-10 mt-5"
                        onClick={addEvent}>
                        Add New Event
                    </button>
                ) : (
                    <div></div>
                )}
            </div>
            <div className="w-full py-10 pl-28 gap-4 flex-wrap flex justify-start">
                {events.map((event) => (
                    <EventCard event={event} />
                ))}
            </div>
            {/* <Notification notify={notify} setNotify={setNotify} /> */}
            <Footer />
        </>
=======
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <div className="flex justify-between">
            <h1 className="text-black font-bold px-10 pt-5 text-5xl">
                Your Events
            </h1>
            
        </div>
        <div className="w-full py-10 pl-28 gap-4 flex-wrap flex justify-start">
            {events.map((event) => (
                <EventCard event={event} />
            ))}
        </div>
        <Notification notify={notify} setNotify={setNotify} />
        <Footer />
    </>
>>>>>>> f5f2fca311b17dfbf4178e4900f682c935cf11c5
    );
};

export default EventList;
