import {EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmDialog from "../ConfirmDialog";
import Notification from "../Notification";
export default function RequestList() {
    const [request, setRequest] = useState([]);
    const [updateClicked,setUpdateClicked]=useState(false);
    const [teacherName,setTeacherName]=useState("");
    const [requestTitle,setRequestTitle]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [description,setDesc]=useState("");

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

    useEffect(() => {
        const fetchRequest = async () => {
            const res = await axios.get("/api/Request/all");
            setRequest(res.data);
            console.log(res.data);
        };
        fetchRequest();
    }, []);

    const addRequest = () =>{
       navigate ("/api/Request/add");

    }
    
    let navigate = useNavigate();

    const handleDelete = async (id, e) => {
        e.preventDefault();
        axios
            .delete(`/api/Request/delete/${id}`, {
                headers: { authToken: localStorage.getItem("authToken") },
            })
            .then((res) => {
                console.log("deleted");
                window.location.reload();
                setNotify({
                    isOpen: true,
                    message: "Request deleted successfully",
                    type: "error",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUpdate = async(
        id,
        e,
        teacherName,
        requestTitle,
        date,
        time,
        description,
    )=> {
       navigate(`/teacher/Request/update/${id}`,{
         state: {
             teacherName : teacherName,
             requestTitle : requestTitle,
             date : date,
             time : time,
             description : description,
         },

       });

    };
    
return (
    <div className="p-26">

<div class=" items-center justify-center mb-10 ml-10 bg-white">
<div class="col-span-12">
    <div class="overflow-auto lg:overflow-visible"></div>
        <div class="p-5 bg-gray-100 rounded-lg ">

        
        <div class="overflow-auto rounded-lg shadow">
        
        <div>
        <a href="/teacher/request/add">
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
            onClick={addRequest}
            >
            Add
            </button>
        </a>
        
        
        </div>
    

        <table class="w-full">
            <thead class="bg-green-200 border-b-2 border-gray-200">
                <tr>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Teacher Name</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Request Name</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Time</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Discriptions</th>
                </tr>
            </thead>
            <tbody>

            {request.map((r) => (
    
        <tr class="bg-green-100 lg:text-black">
        <td class="p-3">
            <a  class="text-gray-500 hover:text-gray-100 mr-2">
                <i class="material-icons-outlined text-base"><EyeOutlined /></i>
            </a>
            <a  class="text-yellow-400 hover:text-gray-100 mx-2">
                <i class="material-icons-outlined text-base"><EditOutlined 
                                                onClick={(e)=>
                                                       handleUpdate(
                                                           r._id,
                                                           e,
                                                           r.teacherName,
                                                           r.requestTitle,
                                                           r.date,
                                                           r.time,
                                                           r.description,
                                                       )
                                                     
                                                }
                /></i>
            </a>
            <a
                
                class="text-red-400 hover:text-gray-100 ml-2"
            >
                <i class="material-icons-round text-base"><DeleteOutlined onClick={(e) =>
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
                                                            }/></i>
            </a>
            </td>
            <td class="p-3 font-medium capitalize">{r.teacherName}</td>
            <td class="p-3 font-medium capitalize">{r.requestTitle}</td>
            <td class="p-3 font-medium capitalize">{r.Date}</td>
            <td class="p-3 font-medium capitalize">{r.time}</td>
            <td class="p-3 font-medium capitalizee">{r.description}</td>
        </tr>))}

        
        

        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
              <Notification notify={notify} setNotify={setNotify}/>
              <ConfirmDialog 
                     confirmDialog={confirmDialog}
                     setConfirmDialog={setConfirmDialog} />
         <Footer/>
    </div>
        
        
        
    );
}