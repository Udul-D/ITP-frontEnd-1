import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";

function AddEvent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [eventName, setEventName] = useState("");
    const [selectDate, setSelectDate] = useState(null);
    const [time, setTime] = useState("");
    const [venue, setVenue] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [tags, setTags] = useState("");
    const [reglink, setReglink] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

    
        const data = {
            eventName: eventName,
            eventDate: selectDate,
            time: time,
            Venue: venue,
            description: description,
            imageUrl: image,
            tags: tags,
            registrationLink: reglink,
            
        };

        try {
            await axios
                .post("/api/event/add", {
                    headers: {
                        authToken: localStorage.getItem("authToken"),
                    },
                    data,
                })
                .then((res) => {
                    console.log("add event res", res);
                    window.location.href = "/admin/events"
                })
                .catch((err) => {
                    console.log(err);                   
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">
                    Create Your Event
                </h1>
            </div>
            <div className="mx-96">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form
                        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={onSubmit}>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Event Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Event Name"
                                onChange={(e) =>
                                    setEventName(e.target.value)
                                }
                                required
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Date
                            </label>
                            <div class="relative flex">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none z-10">
                                    <svg
                                        class="w-5 h-5 text-gray-700 dark:text-gray-400 top-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <DatePicker
                                    className="shadow appearance-none border rounded w-full py-2 pr-3 pl-10 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                    selected={selectDate}
                                    onChange={(date) =>
                                        setSelectDate(date)
                                    }
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    required
                                />
                            </div>
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Time (24 Hour Format)
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Time"
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Venue
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Venue"
                                onChange={(e) => setVenue(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Description
                            </label>
                            <textarea
                                class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
                                "
                                id="exampleFormControlTextarea1"
                                required
                                rows="3"
                                onChange={(e) =>{
                                    setDescription(e.target.value);
                                }}          
                                placeholder="Description"></textarea>
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Image
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Image Url"
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Tags
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Tags"
                                onChange={(e) => setTags(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Registration Link
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Registration Link"
                                onChange={(e) =>
                                    setReglink(e.target.value)
                                }
                                required
                            />
                        </div>

                        <button
                            class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded"
                            type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddEvent;
