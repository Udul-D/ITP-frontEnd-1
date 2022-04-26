export default function ExamCard({ exam }) {
    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100">
                <img
                    className="h-40 w-full object-cover rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wk4x2MS5IwwYFijpcXzrSnwZI-eYc07CiA&usqp=CAU"
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
                            {exam.date}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {exam.time}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Duration : {exam.duration} hrs
                        </span>
                    </div>
                </div>
            </div>
            <a href="#">
                <button className="bg-green-600 w-full text-white font-bold py-2 px-4 rounded-b-lg hover:bg-green-800">
                    View
                </button>
            </a>
        </div>
    );
}
