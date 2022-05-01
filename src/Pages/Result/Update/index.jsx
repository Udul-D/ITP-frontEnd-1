import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
import { data } from "autoprefixer";
function UpdateResult() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const id = this.props.match.params.id;

    const [examName, setExamName] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentId, setStudentID] = useState("");
    const [marks, setMarks] = useState(null);

    useEffect(() => {
        const getData = () => {
            axios
                .get("/api/result/" + id, {
                    headers: {
                        authToken: localStorage.getItem("authToken"),
                    },
                })
                .then((res) => {
                    console.log(res);
                    setExamName(res.data.examName);
                    setStudentName(res.data.studentName);
                    setStudentID(res.data.studentId);
                    setMarks(res.data.marks);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getData();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            examName: examName,
            studentName: studentName,
            studentId: studentId,
            marks: marks,
        };

        try {
            await axios
                .put("/api/result/update/" + id, {
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
                <h1 className="font-bold text-5xl text-black">Results</h1>
            </div>
            <div className="mx-96 w-1/2 ">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form
                        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                        autoComplete="off"
                        onSubmit={onSubmit}>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Exam Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                onChange={(e) => setExamName(e)}
                                value={examName}
                                placeholder="Exam Name"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Student Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                onChange={(e) => setStudentName(e)}
                                value={studentName}
                                placeholder="Student Name"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Student ID
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                onChange={(e) => setStudentID(e)}
                                value={studentId}
                                placeholder="Student ID"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Marks
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="number"
                                onChange={(e) => setMarks(e)}
                                value={marks}
                                placeholder="Marks"
                            />
                        </div>
                        <button
                            type="submit"
                            class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Update
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UpdateResult;
