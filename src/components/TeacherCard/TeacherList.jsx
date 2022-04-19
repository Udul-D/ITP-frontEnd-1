export default function TeacherList() {
    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100">
                <img
                    className="h-40 w-full object-cover rounded-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wk4x2MS5IwwYFijpcXzrSnwZI-eYc07CiA&usqp=CAU"
                    alt=""
                />
                <div className="p-2">
                    <h2 className="font-bold text-xl mb-2">
                        Mr. Rathnayaka
                    </h2>
                    <p className="text-sm text-justify text-gray-600">
                    BSc Special(Hons) in Information Technology.
                    University of Colombo
                    </p>
                </div>
                <div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Subject : Information Technology 
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Class Type : Theory
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Grade : A/L
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
