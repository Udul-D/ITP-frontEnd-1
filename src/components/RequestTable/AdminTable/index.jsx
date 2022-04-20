import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function AdminRequestList() {
    return (
        <div className="p-26">
            <div class=" items-center justify-center mb-10 ml-10 bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                            <div>
                                
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
                                            Teacher Name
                                        </th>
                                        <th class="p-3 text-sm font-bold tracking-wide text-left">
                                            Request Name
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
                                        
                                    <td class="p-3 font-medium capitalize">Mr Rathnayaka</td>
                                    <td class="p-3 font-medium capitalize">A/L ICT Seminar</td>
                                    <td class="p-3 font-medium capitalize">22/05/01</td>
                                    <td class="p-3 font-medium capitalize">8.30 AM</td>
                                    <td class="p-3 font-medium capitalizee">This is only for Advanced Level Students</td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        
                                    <td class="p-3 font-medium capitalize">Mr Premathilaka</td>
                                    <td class="p-3 font-medium capitalize">Chemistry Revision</td>
                                    <td class="p-3 font-medium capitalize">22/05/08</td>
                                    <td class="p-3 font-medium capitalize">8.30 AM</td>
                                    <td class="p-3 font-medium capitalizee">This is only for Advanced Level Students</td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        
                                    <td class="p-3 font-medium capitalize">Prof. Mahesh</td>
                                    <td class="p-3 font-medium capitalize">A/L seminar</td>
                                    <td class="p-3 font-medium capitalize">22/03/01</td>
                                    <td class="p-3 font-medium capitalize">8.30 AM</td>
                                    <td class="p-3 font-medium capitalizee">This is only for the after O/L exam students</td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        
                                    <td class="p-3 font-medium capitalize">Mrs. Kumudu</td>
                                    <td class="p-3 font-medium capitalize">SFT Practical</td>
                                    <td class="p-3 font-medium capitalize">22/05/04</td>
                                    <td class="p-3 font-medium capitalize">1.30 pM</td>
                                    <td class="p-3 font-medium capitalizee">I want a projector on that day</td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        
                                    <td class="p-3 font-medium capitalize">Mr Silva</td>
                                    <td class="p-3 font-medium capitalize">O/L History </td>
                                    <td class="p-3 font-medium capitalize">22/05/10</td>
                                    <td class="p-3 font-medium capitalize">10.30 AM</td>
                                    <td class="p-3 font-medium capitalizee">Want a large Sri Lanka map </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        
                                    <td class="p-3 font-medium capitalize">Mrs. Susila</td>
                                    <td class="p-3 font-medium capitalize">A/L Sinhala Seminar</td>
                                    <td class="p-3 font-medium capitalize">22/05/012</td>
                                    <td class="p-3 font-medium capitalize">10.30 AM</td>
                                    <td class="p-3 font-medium capitalizee">I will be invite Mr Perera for special speec on that day</td>
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
