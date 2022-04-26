import {EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"



export default function Timetable() {
return (
    <div className="p-26 w-full">

<div class=" items-center justify-center mb-10 bg-white">
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
                px-3
                flex
                sm
                rounded-full mb-3
            "
            >
            Add Timetale
            </button>
        </a>
        
        
        </div>
    

        <table class="w-full">
            <thead class="bg-green-200 border-b-2 border-gray-200">
                <tr>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Subject</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Grade</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Teacher Name</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Hall Number</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Time</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Class Type</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Medium</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Floor Number</th>
                </tr>
            </thead>
            <tbody>
    
        <tr class="bg-green-100 lg:text-black">
        <td class="p-3">
            <a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
                <i class="material-icons-outlined text-base"><EyeOutlined /></i>
            </a>
            <a href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
                <i class="material-icons-outlined text-base"><EditOutlined /></i>
            </a>
            <a
                href="#"
                class="text-red-400 hover:text-gray-100 ml-2"
            >
                <i class="material-icons-round text-base"><DeleteOutlined /></i>
            </a>
            </td>
            <td class="p-3 font-medium capitalize">Science</td>
            <td class="p-3 uppercase pl-4">11</td>
            <td class="p-3">Mr.Ssamaranayaka</td>
            <td class="p-3 pl-8">L9</td>
            <td class="p-3">06.20.2022</td>
            <td class="p-3">8.30 a.m</td>
            <td class="p-3 ">Theory</td>
            <td class="p-3 ">Sinhala</td>
            <td class="p-3 uppercase pl-12">2</td>
        </tr>

        <tr class="bg-green-100 lg:text-black">
        <td class="p-3">
            <a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
                <i class="material-icons-outlined text-base"><EyeOutlined /></i>
            </a>
            <a href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
                <i class="material-icons-outlined text-base"><EditOutlined /></i>
            </a>
            <a
                href="#"
                class="text-red-400 hover:text-gray-100 ml-2"
            >
                <i class="material-icons-round text-base"><DeleteOutlined /></i>
            </a>
            </td>
            <td class="p-3 font-medium capitalize">History</td>
            <td class="p-3 uppercase pl-4">11</td>
            <td class="p-3 ">Mr.Dissanayake</td>
            <td class="p-3 pl-8">L01</td>
            <td class="p-3">07.04.2022</td>
            <td class="p-3">8.30 a.m</td>
            <td class="p-3 ">Theory</td>
            <td class="p-3 ">Sinhala</td>
            <td class="p-3 uppercase pl-12">1</td>
        </tr>

        <tr class="bg-green-100 lg:text-black">
        <td class="p-3">
            <a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
                <i class="material-icons-outlined text-base"><EyeOutlined /></i>
            </a>
            <a href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
                <i class="material-icons-outlined text-base"><EditOutlined /></i>
            </a>
            <a
                href="#"
                class="text-red-400 hover:text-gray-100 ml-2"
            >
                <i class="material-icons-round text-base"><DeleteOutlined /></i>
            </a>
            </td>
            <td class="p-3 font-medium capitalize">Maths</td>
            <td class="p-3 uppercase pl-4">11</td>
            <td class="p-3 ">Mr.Perera</td>
            <td class="p-3 pl-8">L04</td>
            <td class="p-3">21.04.2022</td>
            <td class="p-3">8.30 a.m</td>
            <td class="p-3 ">Theory</td>
            <td class="p-3 ">Sinhala</td>
            <td class="p-3 uppercase pl-12">4</td>
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