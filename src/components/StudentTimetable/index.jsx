import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import MaterialTable from 'material-table';
import { height } from "@mui/system";

export default function Timetable() {
    const [timetable, setTimetable] = useState([]);
   

    useEffect(() => {
        const fetchTimetable = async () => {
            const res = await axios.get("/api/timetable/all");
            setTimetable(res.data);
            console.log(res.data);
        };
        fetchTimetable();
    }, []);
    let navigate = useNavigate();


   
    return (
        
        <div className="p-26">
                <div class="container-fluid">
        <MaterialTable  style={{background:"#e6ffe6"}}
                    title="Search Yours.. "

                    columns={[
                        { title: "Subject", field: "subject", type: "string" },
                        { title: "Grade", field: "grade", type: "string" },
                        { title: "Teacher Name", field: "teacherName", type: "string" },
                        { title: "Hall Number", field: "hallNumber", type: "string" },
                        { title: "Date", field: "date", type: "date" },
                        { title: "Time", field: "time", type: "string" },
                        { title: "Class Type", field: "classType", type: "string" },
                        { title: "Medium", field: "medium", type: "string" },
                        { title: "Floor Number", field: "floorNumber", type: "string" },
                         
                            ]}

                    data={timetable}
                    options={{
                        sorting: true,
                        search:false,
                        paging :true,
                        filtering : true,
                        actionsColumnIndex: -1,
                        exportButton:{
                            csv: true,
                            pdf: true,

                        }
                    }}
              />      
                  
       
        </div>
        
        </div>
    );
}