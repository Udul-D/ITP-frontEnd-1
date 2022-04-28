import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
function AddTutorial() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [tutorialName, setTutorialName] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [lessonName, setLessonName] = useState("");
    const [link, setlink] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            tutorialName: tutorialName,
            subject: subject,
            grade: grade,
            teacherName: teacherName,
            lessonName: lessonName,
            link: link,
        };

        try {
            await axios
                .post("/api/tutorial/add", {
                    headers: {
                        authToken: localStorage.getItem("authToken"),
                    },
                    data,
                })
                .then((res) => {
                    console.log(res);
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
                    Create Your Tutorial
                </h1>
            </div>
            
            <div className="mx-96">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={onSubmit}>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Tutorial Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Tutorial Name"
                                onChange={(e) =>
                                    setTutorialName(e.target.value)
                                }
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Subject
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Subject"
                                onChange={(e) =>
                                    setSubject(e.target.value)
                                }
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Grade
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Grade"
                                onChange={(e) =>
                                    setGrade(e.target.value)
                                }
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Teacher Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Teacher Name"
                                onChange={(e) =>
                                    setTeacherName(e.target.value)
                                }
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Lesson Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Lesson Name"
                                onChange={(e) =>
                                    setLessonName(e.target.value)
                                }
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Link
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Links"
                                onChange={(e) =>
                                    setlink(e.target.value)
                                }
                            />
                        </div>
                        <div class="flex w-full items-center justify-center bg-grey-lighter">
                            <label class="w-48 mb-6 flex flex-col items-center px-2 py-3 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer bg-green-600 hover:bg-green-800 text-white hover:text-white">
                                <svg
                                    class="w-8 h-8"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-base leading-normal">
                                    Select the tutorial file
                                </span>
                                <input type="file" class="hidden" />
                            </label>
                        </div>
                        <button class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddTutorial;