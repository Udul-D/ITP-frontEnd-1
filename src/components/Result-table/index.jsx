import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    EyeOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import Notification from "../Notification/index";
import ConfirmDialog from "../ConfirmDialog/index";

export default function Result() {
    const location = useLocation();
    const exam_name = location.state.examName;
    console.log("exam value " + location.state.examName);
    const [results, setResults] = useState([]);
    const [updateClicked, setUpdateClicked] = useState(false);
    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [marks, setMarks] = useState("");

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

    function compare(a, b) {
        if (a.marks < b.marks) {
            return 1;
        }
        if (a.marks > b.marks) {
            return -1;
        }
        return 0;
    }

    useEffect(() => {
        const fetchResult = async () => {
            const res = await axios.get("/api/result/all", {
                params: { examName: exam_name },
            });

            const copyResults = res.data;
            const dt = copyResults?.sort(compare);
            let newArr = dt.map((entry, i) => ({
                ...entry,
                newRank: i + 1,
            }));
            console.log({ newArr });

            setResults(newArr);
            console.log("result data " + res.data[0].marks);
        };
        fetchResult();
    }, []);
    let navigate = useNavigate();

    const addResult = () => {
        const exam = exam_name;
        const path = `/teacher/result/add`;
        navigate(path, { state: { ExamName: exam } });
    };

    const handleDelete = async (id, e) => {
        e.preventDefault();
        axios
            .delete(`/api/result/delete/${id}`, {
                headers: { authToken: localStorage.getItem("authToken") },
            })
            .then((res) => {
                console.log("deleted");
                window.location.reload();
                setNotify({
                    isOpen: true,
                    message: "Result deleted successfully",
                    type: "error",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleUpdate = async (
        id,
        e,
        studentId,
        studentName,
        marks,
        examName,
    ) => {
        navigate(`/teacher/result/update/${id}`, {
            state: {
                studentId: studentId,
                studentName: studentName,
                marks: marks,
                examName: examName,
            },
        });
    };

    return (
        <div className="p-26">
            <div class=" items-center justify-center bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                            <div className="pb-4">
                                <div className="flex p-3">
                                    <div className="">
                                        <span className="font-bold">
                                            {/* Teacher Name :{" "} */}
                                        </span>
                                        <span className="text-gray-800">
                                            {/* {localStorage.getItem(
                                                "teacherName",
                                            )} */}
                                        </span>
                                    </div>
                                    <div className="">
                                        <span className="font-bold">
                                            {/* Subject :
                                            {" " +
                                                localStorage.getItem(
                                                    "subject",
                                                )} */}
                                        </span>
                                        <span className="text-gray-800"></span>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <span>
                                                <span>Exam Name : </span>
                                                <span className="font-bold text-lg">
                                                    {"  " + exam_name}
                                                </span>
                                                <span className="text-gray-800">
                                                    {results.examName}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="ml-96">
                                            <div className="ml-96">
                                                <div className="ml-64">
                                                    {localStorage.getItem(
                                                        "role",
                                                    ) === "teacher" ? (
                                                        <button
                                                            class="
                                            bg-green-600
                                            hover:bg-green-800
                                            text-white
                                            py-2
                                            px-5
                                            flex
                                            sm
                                            rounded-full mb-3"
                                                            onClick={
                                                                addResult
                                                            }>
                                                            Add Results
                                                        </button>
                                                    ) : (
                                                        <div></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <table class="w-full pt-4">
                                <thead class="bg-green-200 border-b-2 border-gray-200">
                                    <tr>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Action
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Student ID
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Student Name
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Marks
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Rank
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((r) => (
                                        <tr class="bg-green-100 lg:text-black">
                                            <td class="p-3">
                                                <a class="text-yellow-400 hover:text-gray-100 mx-2 px-2">
                                                    <i class="material-icons-outlined text-base">
                                                        <EditOutlined
                                                            onClick={(e) =>
                                                                handleUpdate(
                                                                    r._id,
                                                                    e,
                                                                    r.studentId,
                                                                    r.studentName,
                                                                    r.marks,
                                                                    r.examName,
                                                                )
                                                            }
                                                        />
                                                    </i>
                                                </a>
                                                <a class="text-red-400 hover:text-gray-100 ml-2 px-2">
                                                    <i class="material-icons-round text-base">
                                                        <DeleteOutlined
                                                            onClick={(e) =>
                                                                setConfirmDialog(
                                                                    {
                                                                        isOpen: true,
                                                                        title: "Delete Result",
                                                                        subTitle:
                                                                            "Are you sure you want to delete this Result?",
                                                                        onConfirm:
                                                                            () => {
                                                                                {
                                                                                    handleDelete(
                                                                                        r._id,
                                                                                        e,
                                                                                    );
                                                                                }
                                                                            },
                                                                    },
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
                                                        value={studentId}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setStudentId(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.studentId}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={studentName}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setStudentName(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.studentName}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3 uppercase pl-8">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={marks}
                                                        onChange={(e) =>
                                                            setMarks(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                    />
                                                ) : (
                                                    <span>{r.marks}</span>
                                                )}
                                            </td>
                                            <td class="p-3 uppercase">
                                                {r.newRank}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
            <Footer />
        </div>
    );
}
