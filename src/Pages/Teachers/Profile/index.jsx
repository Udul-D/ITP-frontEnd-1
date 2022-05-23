import {EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmDialog from "../../../components/ConfirmDialog";
import Notification from "../../../components/Notification";
export default function TeacherProfile() {
   
    const [isOpen, setIsOpen] = useState(false);
    const [teacher, setTeacher] = useState([]);
    const [userId, setUserId] = useState("");
    const {NIC,firstName,lastName,phoneNumber,email,subject,grade,medium,classType,higerQulification,userName,password,experienceYear }=teacher

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
            console.log(res.data);
            const id = localStorage.getItem("id") 
            setUserId(id)
            console.log(id)
            getTeacher(id);

        };
        fetchRequest();
    }, []);

    const onClickUpdateTeacher = (e) =>{
        e.preventDefault();
        console.log(userId)
     navigate (`/teacher/update/${userId}`);

    }

    const getTeacher = async (id) =>{
        try {
            const res = await axios.get(`/api/teacher/${id}`);
            console.log("Teacher :",res.data)




            setTeacher(res.data)
        } catch (error) {
            console.log(error)            
        }
        

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
       navigate(`/teacher/Request/update/${userId}`,{
         state: {
             teacherName : teacherName,
             requestTitle : requestTitle,
             date : date,
             time : time,
             description : description,
         },

       });

    };
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Header toggle={toggle} />

    <div className="mx-96">
        {/* <div className="bg-gray-100 shadow-md rounded p-5 mb-10 mt-5"> */}
        <div className="text-center py-5 bg-green-600 mt-8">
            <h1 className="font-bold text-3xl text-white">
                My Profile
            </h1>
        </div>
        <form
            className="bg-white rounded px-8 pt-6 pb-8 mb-8 shadow-md"
            onSubmit={onClickUpdateTeacher}
            >
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="FirstName">
                    First Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="firstname"
                    type="text"
                    value={firstName}
                    disabled={true}
                    placeholder="First Name"
                    //onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="LastName">
                    Last Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="lastname"
                    type="text"
                    value={lastName}
                    disabled={true}
                    placeholder="Last Name"
                    //onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            {/* <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username">
                    Date
                </label>
                <div class="relative flex">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none z-10">
                        <svg
                            class="w-5 h-5 text-gray-700 dark:text-gray-400 top-10"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <DatePicker
                        className="shadow appearance-none border rounded w-full py-2 pr-3 pl-10 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                        onChange={(date) => setbirthDay(date)}
                        value={birthDay}
                        startDate={birthDay}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div> */}

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="NIC">
                    NIC
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-600 focus:shadow-outline"
                    id="nic"
                    type="text"
                    value={NIC}
                    disabled={true}
                    placeholder="NIC"
                    //onChange={(e) => setNIC(e.target.value)}
                />
            </div>

            {/* <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="NIC">
                    Gender
                </label>
            </div>
            <div className="mb-6">
                <div class="flex">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inlineRadioOptions"
                            id="male"
                            value="male"
                            onChange={(e) =>
                                setGender(e.target.value)
                            }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio10">
                            Male
                        </label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full ml-5 h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inlineRadioOptions"
                            id="female"
                            value="female"
                            onChange={(e) =>
                                setGender(e.target.value)
                            }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio20">
                            Female
                        </label>
                    </div>
                </div>
            </div> */}

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="phonenumber">
                    Phone Number
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="phonenumber"
                    type="text"
                    value={phoneNumber}
                    disabled={true}
                    placeholder="Phone Number"
                    //onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="email"
                    type="text"
                    value={email}
                    disabled={true}
                    placeholder="Email"
                    //onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email">
                    Subject
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="email"
                    type="text"
                    value={subject}
                    disabled={true}
                    placeholder="Subject"
                    //onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            


            {/* <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="parentoccupation">
                    Subject
                </label>
                <div class="mb-6 xl:w-full">
                    <select
                        class="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        disabled={true}
                        >
                        <option selected>{subject}</option>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="Sinhala">Sinhala</option>
                        <option value="Sinhala">History</option>
                        <option value="Sinhala">Combined Maths</option>
                        <option value="Sinhala">Chemistry</option>
                        <option value="Sinhala">Physics</option>
                        <option value="Sinhala">Science For Technology (SFT)</option>
                        <option value="Sinhala">Engineering Technology (ET)</option>
                        <option value="Sinhala">Business Management (BM)</option>
                        <option value="Sinhala">Economic</option>
                        <option value="Sinhala">Information Technology (ICT)</option>
                    </select>
                </div>
            </div> */}

              <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email">
                    Grade
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="grade"
                    type="text"
                    value={grade}
                    disabled={true}
                    placeholder="Grade"
                    //onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="parentoccupation">
                    Garde
                </label>
                <div class="mb-6 xl:w-full">
                    <select
                        class="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        disabled={true} 
                        >
                        <option selected>{grade}</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Ordinary Level">
                            Ordinary Level  (O/L)
                        </option>
                        <option value="A/L">Advanced Level  (A/L)</option>
                    </select>
                </div>
            </div> */}
             
             <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email">
                    Medium
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="medium"
                    type="text"
                    value={medium}
                    disabled={true}
                    placeholder="Medium"
                    //onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="Meadium">
                    Meadium
                </label>
            </div>
            <div className="mb-6">
                <div class="flex">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inlineRadioOptions"
                            id="sinhala"
                            disabled={true}
                            value={medium}
                            // onChange={(e) =>
                            //     setMedium(e.target.value)
                            // }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio10">
                            Sinhala
                        </label>
                    </div>
                    

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full ml-5 h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inlineRadioOptions"
                            id="English"
                            disabled={true}
                            value={medium}
                            // onChange={(e) =>
                            //     setMedium(e.target.value)
                            // }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio20">
                            English
                        </label>
                    </div>
                </div>
            </div> */}

                <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email">
                    Class Type
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                    id="classType"
                    type="text"
                    value={classType}
                    disabled={true}
                    placeholder="class type"
                    //onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="Meadium">
                    Class Type
                </label>
            </div>
            <div className="mb-6">
                <div class="flex">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inlineRadioOptions"
                            id="sinhala"
                            disabled={true}
                            value={classType}
                            // onChange={(e) =>
                            //     setClassType(e.target.value)
                            // }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio10">
                            Theory
                        </label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full ml-5 h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Revision"
                            disabled={true}
                            value={classType}
                            // onChange={(e) =>
                            //     setClassType(e.target.value)
                            // }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio20">
                            Revision
                        </label>
                    </div>
                </div>
            </div> */}

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="educationQualification">
                    Education Qualification
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                   
                    type="text"
                    value={higerQulification}
                    disabled={true}
                    placeholder="Education Qualification"
                    //onChange={(e) => setEducationQualifications(e.target.value)}
                />
            </div>

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="experienceYear">
                    Experience Year
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                   
                    type="text"
                    value={experienceYear}
                    disabled={true}
                    placeholder="Experience Year"
                    //onChange={(e) => setExperienceYear(e.target.value)}
                />
            </div>

            

            

            <div class="flex w-full items-center justify-center bg-grey-lighter">
                <button class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded"
                
        type="submit">
                    Update
                </button>
            </div>
        </form>
        {/* </div> */}
    </div>
    <Notification notify={notify} setNotify={setNotify}/>
              <ConfirmDialog 
                     confirmDialog={confirmDialog}
                     setConfirmDialog={setConfirmDialog} />
    <Footer />
</>
        
        
        
    );
}