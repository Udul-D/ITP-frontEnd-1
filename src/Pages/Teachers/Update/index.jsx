import {EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmDialog from "../../../components/ConfirmDialog";
import Notification from "../../../components/Notification";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
export default function TeacherProfileUpdate() {
    const [teacher, setTeacher] = useState([]);
    const [userId, setUserId] = useState("");
    const [isOpen,setIsOpen]=useState(false);
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

    const onClickUpdateTeacher = async (e) =>{
        e.preventDefault();
        console.log(userId)
        try {
            const res = await axios.put(`/api/teacher/update/${userId}`,teacher);
            console.log("Uppdate success :",res)
            setTeacher(res.data)
            setNotify({
                isOpen: true,
                message: "Profile Update Successful",
                type: "success",

            });
            navigate(`/dashboard`)
            
        } catch (error) {
            console.log(error)            
        }
    }
   const clickSave=()=>{
       navigate("/dashboard")
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
    const onChangeInput = (e,inputName) =>{
        setTeacher({...teacher,[inputName]:e.target.value})
        console.log(teacher)
        console.log("value",e.target.value)
       
    }
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Header toggle={toggle}  />

    <div className="mx-96">
        {/* <div className="bg-gray-100 shadow-md rounded p-5 mb-10 mt-5"> */}
        <div className="text-center py-5 bg-green-600 mt-8">
            <h1 className="font-bold text-3xl text-white">
                Update Profile
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
                    defaultValue={firstName}
                    placeholder="First Name"
                    onChange={(e) => onChangeInput(e,"firstName")}
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
                    defaultValue={lastName}
                    placeholder="Last Name"
                    onChange={(e) => onChangeInput(e,"lastName")}
                />
            </div>

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
                    defaultValue={NIC}
                    placeholder="NIC"
                    onChange={(e) => onChangeInput(e,"NIC")}
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
                    defaultValue={phoneNumber}
                    placeholder="Phone Number"
                    onChange={(e) => onChangeInput(e,phoneNumber)}
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
                    defaultValue={email}
                    disabled={true}
                    placeholder="Email"
                    onChange={(e) => onChangeInput(e,"email")}
                />
            </div>

            


            <div>
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
                        
                        onChange={(e) =>
                            onChangeInput(e,"subject")
                        }
                        >
                        {/* <option selected>{subject}</option> */}
                        <option selected>{subject}</option>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="Sinhala">Sinhala</option>
                        <option value="History">History</option>
                        <option value="Combined Maths">Combined Maths</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Physics">Physics</option>
                        <option value="Science For Technology (SFT)">Science For Technology (SFT)</option>
                        <option value="Engineering Technology (ET)">Engineering Technology (ET)</option>
                        <option value="Business Management (BM)">Business Management (BM)</option>
                        <option value="Economic">Economic</option>
                        <option value="Information Technology (ICT)">Information Technology (ICT)</option>
                    </select>
                </div>
            </div>

            <div>
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
                        onChange={(e) =>
                            onChangeInput(e,"grade")
                        }
                        >
                        <option selected>{grade}</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Ordinary Level(O/L)">
                            Ordinary Level  (O/L)
                        </option>
                        <option value="Advanced Level (A/L)">Advanced Level  (A/L)</option>
                    </select>
                </div>
            </div>
             
            <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="Meadium">
                    Medium
                </label>
            </div>
            <div className="mb-6">
                <div class="flex">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inlineRadioO"
                            id="sinhala"
                           
                            value="Sinhala"
                            onChange={(e) =>
                                onChangeInput(e,"medium")
                            }
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
                            name="inlineRadioO"
                            value="English"
                           
                            onChange={(e) =>
                                onChangeInput(e,"medium")
                            }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio20">
                            English
                        </label>
                    </div>
                </div>
            </div>

            <div>
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
                            name="inl"
                            value="Theory"
                            defaultValue={classType}
                            onChange={(e) =>
                                onChangeInput(e,"classType")
                            }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inl">
                            Theory
                        </label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input form-check-input appearance-none rounded-full ml-5 h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="inl"
                            value="Revision"
                            defaultValue={classType}
                            onChange={(e) =>
                                onChangeInput(e,"classType")
                            }
                        />
                        <label
                            class="form-check-label inline-block text-gray-800"
                            for="inlineRadio20">
                            Revision
                        </label>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="educationQualification">
                    Education Qualification
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                   
                    type="text"
                    defaultValue={higerQulification}
                    placeholder="Education Qualification"
                    onChange={(e) => onChangeInput(e,"educationQualifications")}
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
                    defaultValue={experienceYear}
                    placeholder="Experience Year"
                    onChange={(e) => onChangeInput(e,"experienceYear")}
                />
            </div>

            

            

            <div class="flex w-full items-center justify-center bg-grey-lighter">
            <button class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded"   
             type="submit"
        
        > Save Details</button>
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