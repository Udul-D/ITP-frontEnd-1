import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function Event() {
    return (
        <div className="p-26">
            <div class=" items-center justify-center min-h-screen bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                            <div>
                                <div>
                                    <a href="#">
                                        <button
                                            class="
                                        bg-green-600
                                        hover:bg-green-800
                                        text-white
                                        py-1
                                        px-3
                                        sm
                                        rounded-full mb-3
                                    ">
                                            ADD EVENT
                                        </button>
                                    </a>
                                </div>

                                <a href="#">
                                    <button
                                        class="
                                        bg-green-600
                                        hover:bg-green-800
                                        text-white
                                        py-1
                                        px-5
                                        sm
                                        rounded-full mb-3
                                        
                                    ">
                                        All
                                    </button>
                                </a>

                                <a href="#">
                                    <button
                                        class="
                
                                        hover:bg-green-800
                                        text-black
                                        py-1
                                        px-8
                                        sm
                                        rounded-full mb-3
                                    ">
                                        Upcoming
                                    </button>
                                </a>

                                <a href="#">
                                    <button
                                        class="
                
                                        hover:bg-green-800
                                        text-black
                                        py-1
                                        px-5
                                        sm
                                        rounded-full mb-3
                                    ">
                                        Past
                                    </button>
                                </a>

                                <a href="#">
                                    <button
                                        class="
                
                                        hover:bg-green-800
                                        text-black
                                        py-1
                                        px-5
                                        sm
                                        rounded-full mb-3
                                    ">
                                        Ongoing
                                    </button>
                                </a>
                            </div>

                            <table class="w-full">
                                <thead class="bg-green-200 border-b-2 border-gray-200">
                                    <tr>
                                        <th class="p-3 text-sm font-bold tracking-wide text-left">
                                            Action
                                        </th>
                                        <th class="p-3 text-sm font-bold tracking-wide text-left">
                                            Event Name
                                        </th>
                                        <th class="p-3 text-sm font-bold tracking-wide text-left">
                                            Date
                                        </th>
                                        <th class="p-3 text-sm font-bold tracking-wide text-left">
                                            Time
                                        </th>
                                        <th class="p-3 text-sm font-bold tracking-wide text-left">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-5">
                                            <a href="#">
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="#">
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="#">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium">
                                            Science Seminar O/L
                                        </td>
                                        <td class="p-3">2022/05/01</td>
                                        <td class="p-3">7 am - 10 am</td>
                                        <td class="p-3 font-medium">
                                            The goal of Science Seminar is
                                            to expose students interested
                                            in Science to improve their own
                                            knowledge.
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#">
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="#">
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="#">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            Maths Seminar O/L
                                        </td>
                                        <td class="p-3">2022/06/11</td>
                                        <td class="p-3">2 pm - 5 pm</td>
                                        <td class="p-3">
                                            The goal of Maths Seminar is to
                                            expose students interested in
                                            Maths to improve their own
                                            knowledge.
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="#">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            Physics Seminar A/L
                                        </td>
                                        <td class="p-3">2022/05/28</td>
                                        <td class="p-3">11 am - 1 pm</td>
                                        <td class="p-3 ">
                                            The goal of Physics Seminar is
                                            to expose students interested
                                            in Physics to improve their own
                                            knowledge.
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="#">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            Chemistry Seminar A/L
                                        </td>
                                        <td class="p-3">2022/05/18</td>
                                        <td class="p-3">9 am - 11 am</td>
                                        <td class="p-3 ">
                                            The goal of Chemistry Seminar
                                            is to expose students
                                            interested in Chemistry to
                                            improve their own knowledge.
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="#">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            Sinhala Seminar O/L
                                        </td>
                                        <td class="p-3">2022/06/12</td>
                                        <td class="p-3">8 am - 11 am</td>
                                        <td class="p-3 ">
                                            The goal of Sinhala Seminar is
                                            to expose students interested
                                            in Sinhala to improve their own
                                            knowledge.
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined className="text-gray-500 mr-2 hover:text-gray-800" />
                                                </i>
                                            </a>
                                            <a href="#" >
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined className="text-yellow-400 mx-2 hover:text-yellow-500" />
                                                </i>
                                            </a>
                                            <a href="#" >
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            History Seminar A/L
                                        </td>
                                        <td class="p-3">2022/05/28</td>
                                        <td class="p-3">2 pm - 5 pm</td>
                                        <td class="p-3 ">
                                            The goal of History Seminar is
                                            to expose students interested
                                            in History to improve their own
                                            knowledge.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
