import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

export default function AdminRequestList() {

    const [AdminRequestList, setAdminRequestList] = useState([]);

    useEffect(() => {
        const fetchAdminRequestList = async () => {
            const res = await axios.get("/api/Request/all");
            setAdminRequestList(res.data);
            console.log(res.data);
        };
        fetchAdminRequestList();
    }, []);

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

                                {AdminRequestList.map((r) => (
                                    <tr class="bg-green-100 lg:text-black">
                                        
                                    <td class="p-3 font-medium capitalize">{r.teacherName}</td>
                                    <td class="p-3 font-medium capitalize">{r.requestTitle}</td>
                                    <td class="p-3 font-medium capitalize">{r.Date}</td>
                                    <td class="p-3 font-medium capitalize">{r.time}</td>
                                    <td class="p-3 font-medium capitalizee">{r.description}</td>
                                    </tr>

                                    
                             ))}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
