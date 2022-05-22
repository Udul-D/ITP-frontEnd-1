
import { useEffect, useState } from "react";
import axios from "axios";
import ConfirmDialog from "../../../components/ConfirmDialog/index";
import Notification from "../../../components/Notification/index";
import jsPDF from "jspdf";
import Header from "../../Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function AdminRequestList() {

    const [AdminRequestList, setAdminRequestList] = useState([]);

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
        const fetchAdminRequestList = async () => {
            const res = await axios.get("/api/Request/all");
            setAdminRequestList(res.data);
            console.log(res.data);
        };
        fetchAdminRequestList();
    }, []);

    const columns = [
        { title: "Teacher Name", field: "teacherName" },
        { title: "Request Title", field: "requestTitle" },
        { title: "Date", field: "Date"},
        { title: "Time", field: "time" },
        { title: "Description", field: "description" },

    ];
    const downLoadPdf = () => {
        const doc = new jsPDF();
        doc.text("Teacher's Request Sheet",20,10);
        doc.autoTable({
            columns: columns.map((col) => ({
                ...col,
                dataKey: col.field,
            })),
            body: AdminRequestList,
        });
        doc.save(" Request Sheet");
    };

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
                
            "
            onClick={() => downLoadPdf()}>
                                        Download PDF
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
                                    <td class="p-3 font-medium capitalize">{r.Date.split("T")[0]}</td>
                                    <td class="p-3 font-medium capitalize">{r.time}</td>
                                    <td class="p-3 font-medium capitalizee">{r.description}</td>
                                    </tr>

                                    
                             ))}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Notification notify={notify} setNotify={setNotify}/>
              <ConfirmDialog 
                     confirmDialog={confirmDialog}
                     setConfirmDialog={setConfirmDialog} />
                     
        </div>
    );
}
