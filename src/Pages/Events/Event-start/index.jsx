import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";

function EventStart() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    let navigate = useNavigate();

    const [eventName, setEventName] = useState("");
    const [selectDate, setSelectDate] = useState(null);
    const [time, setTime] = useState("");
    const [venue, setVenue] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const getData = async () => {
            setEventName(location.state.eventName);
            setSelectDate(location.state.eventDate.toString());
            setTime(location.state.time);
            setVenue(location.state.Venue);
            setDescription(location.state.description);
        };
        getData();
    }, [location]);

    console.log(eventName);

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

        <div className="">
            <div className="w-full rounded-lg shadow-lg hover:shadow-2xl">
                <div className=" pt-2 px-2 bg-gray-100 p-10">
                    <div className=""></div>
                    <img
                        className="h-96 w-full object-cover rounded-lg"
                        src="https://21mbu63kam0h2kj3iy24qk18-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Lecture-Hall.jpg"
                        alt=""
                    />

                    <div className="p-2">
                        <h2 className="font-bold text-lg mb-2">
                            {eventName}
                        </h2>
                        <p className="text-sm text-justify text-gray-600">
                            {description}
                        </p>
                    </div>
                    <div>
                        <div>
                            <span className="text-gray-800 font-bold pl-2">
                            Date: {selectDate}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-bold pl-2">
                                Time: {time}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-800 font-bold pl-2">
                            Venue: {venue}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <a href= "https://docs.google.com/forms/d/e/1FAIpQLSds7ahVGlWr-t2l2SaCGGZk2CHodiWu9KC8hIZGq7JX6vu8iw/viewform?usp=sf_link" >
            <button
                            class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded mb-10"
                            type="submit" >
                            Register to the Event
                        </button>
                        </a>
        </div>
        <Footer />
        </>

        
    );
}

export default EventStart;
