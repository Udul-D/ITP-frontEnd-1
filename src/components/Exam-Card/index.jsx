import { Link, useNavigate } from "react-router-dom";
import isFuture from "date-fns/isFuture";
import getDate from "date-fns/getDate";
import {
    EyeOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
export default function ExamCard({ exam }) {
    let navigate = useNavigate();
    const selectedDate = exam.date;
    const year = selectedDate.slice(0, 4);
    const month = selectedDate.slice(5, 7);
    const date = selectedDate.slice(8, 10);
    const isInFuture = isFuture(new Date(year, month - 1, date));
    const datePassed = isInFuture;
    const showResultView = (exam) => {
        const selectedDate = exam.date;
        const year = selectedDate.slice(0, 4);
        const month = selectedDate.slice(5, 7);
        const date = selectedDate.slice(8, 10);
        const isInFuture = isFuture(new Date(year, month - 1, date));
        if (isInFuture) {
            navigate("/login");
        } else {
            navigate(`/teacher/results/${exam._id}`, {
                state: {
                    examName: exam.examName,
                },
            });
        }
    };
    const examDate = new Date(exam.date);
    examDate.toISOString().substring(0, 10);
    console.log("date - " + examDate);

    const handleUpdate = () => {
        navigate(`/teacher/exam/update/${exam._id}`, {
            state: {
                examName: exam.examName,
                description: exam.description,
                date: exam.date,
                time: exam.time,
                duration: exam.duration,
            },
        });
    };

    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100">
                {localStorage.getItem("role") === "teacher" ? (
                    <div>
                        <EditOutlined
                            className="text-green-800 text-lg ml-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                            onClick={handleUpdate}
                        />
                        <DeleteOutlined className="text-red-800 text-lg pl-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
                    </div>
                ) : (
                    <div></div>
                )}
                <div className=""></div>
                <img
                    className="h-40 w-full object-cover rounded-lg"
                    src="https://img.freepik.com/free-vector/focused-people-studying-online-school_74855-5834.jpg?w=2000"
                    alt=""
                />
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2">
                        {exam.examName}
                    </h2>
                    <p className="text-sm text-justify text-gray-600">
                        {exam.description}
                    </p>
                </div>
                <div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Date : {exam.date.split("T")[0]}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Time : {exam.time}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Duration : {exam.duration} hrs
                        </span>
                    </div>
                </div>
            </div>
            <a>
                <button
                    className="bg-green-600 w-full text-white font-bold py-2 px-4 rounded-b-lg hover:bg-green-800"
                    onClick={(e) => {
                        e.stopPropagation();
                        showResultView(exam);
                    }}>
                    {datePassed ? "View Exam" : " View Results"}
                </button>
            </a>
        </div>
    );
}
