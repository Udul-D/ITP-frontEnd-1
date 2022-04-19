export default function EventCard() {
    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100">
                <img
                    className="h-40 w-full object-cover rounded-lg"
                    src="https://21mbu63kam0h2kj3iy24qk18-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Lecture-Hall.jpg"
                    alt=""
                />
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2">
                        Science Seminar - O/L
                    </h2>
                    <p className="text-sm text-justify text-gray-600">
                        Simple Yet Beautiful Card Design with TaiwlindCss.
                        Subscribe to our Youtube channel for more ...
                    </p>
                </div>
                <div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Thursday, April 12
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            7:00 AM - 9:00 AM
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            Venue : B501
                        </span>
                    </div>
                </div>
            </div>
            <a href="#">
                <button className="bg-green-600 w-full text-white font-bold py-2 px-4 rounded-b-lg">
                    View
                </button>
            </a>
        </div>
    );
}
