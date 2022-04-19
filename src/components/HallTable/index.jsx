import {EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"


export default function Hall() {
return (
    <div className="p-26">

<div class=" items-center justify-center min-h-screen bg-white">
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
            ADD
            </button>
        </a>
        
        
        </div>
    

        <table class="w-full">
            <thead class="bg-green-200 border-b-2 border-gray-200">
                <tr>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Hall Number</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Floor Number</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Capacity</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">A/C</th>
                </tr>
            </thead>
            <tbody>
    
        <tr class="bg-green-100 lg:text-black">
        <td class="p-3">
            <a href="#" class="text-gray-500 hover:text-gray-100 mr-2 px-2">
                <i class="material-icons-outlined text-base"><EyeOutlined /></i>
            </a>
            <a href="#" class="text-yellow-400 hover:text-gray-100 mx-2 px-2">
                <i class="material-icons-outlined text-base"><EditOutlined /></i>
            </a>
            <a
                href="#"
                class="text-red-400 hover:text-gray-100 ml-2 px-2"
            >
                <i class="material-icons-round text-base"><DeleteOutlined /></i>
            </a>
            </td>
            <td class="p-3 font-medium capitalize">M001</td>
            <td class="p-3">F01</td>
            <td class="p-3 uppercase pl-8">150</td>
            <td class="p-3 uppercase">No</td>
        </tr>

        <tr class="bg-green-100 lg:text-black">
        <td class="p-3">
            <a href="#" class="text-gray-500 hover:text-gray-100 mr-2 px-2">
                <i class="material-icons-outlined text-base"><EyeOutlined /></i>
            </a>
            <a href="#" class="text-yellow-400 hover:text-gray-100 mx-2 px-2">
                <i class="material-icons-outlined text-base"><EditOutlined /></i>
            </a>
            <a
                href="#"
                class="text-red-400 hover:text-gray-100 ml-2 px-2"
            >
                <i class="material-icons-round text-base"><DeleteOutlined /></i>
            </a>
            </td>
            <td class="p-3 font-medium capitalize">M002</td>
            <td class="p-3">F02</td>
            <td class="p-3 uppercase pl-8">200</td>
            <td class="p-3 uppercase">Yes</td>
        </tr>

        <tr class="bg-green-100 lg:text-black">
        <td class="p-3">
            <a href="#" class="text-gray-500 hover:text-gray-100 mr-2 px-2">
                <i class="material-icons-outlined text-base"><EyeOutlined /></i>
            </a>
            <a href="#" class="text-yellow-400 hover:text-gray-100 mx-2 px-2">
                <i class="material-icons-outlined text-base"><EditOutlined /></i>
            </a>
            <a
                href="#"
                class="text-red-400 hover:text-gray-100 ml-2 px-2"
                >
                <i class="material-icons-round text-base"><DeleteOutlined /></i>
            </a>
            </td>
            <td class="p-3 font-medium capitalize">M003</td>
            <td class="p-3">F03</td>
            <td class="p-3 uppercase pl-8">350</td>
            <td class="p-3 uppercase">No</td>
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
