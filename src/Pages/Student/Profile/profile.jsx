import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Notification from "../../../components/Notification/index";

function UpdateStudent() {
    const [isOpen, setIsOpen] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    const navigate = useNavigate();

    const toProfileUpdate = () => {
        navigate("/student/updatestudent/" + roleId);
    };

    const roleId = window.location.pathname.split("/")[3];

    console.log("role id: " + roleId);

    const [Name, setName] = useState("");
    const [NIC, setNIC] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentAddress, setParentAddress] = useState("");

    // fetching student from the databse
    useEffect(() => {
        const fetchStudent = async () => {
            const res = await axios.get("api/student/" + roleId);
            setName(res.data.firstName + " " + res.data.lastName);
            setNIC(res.data.NIC);
            setPhone(res.data.parentPhoneNumber);
            setEmail(res.data.email);
            setParentName(res.data.parentName);
            setParentAddress(res.data.parentAddress);
        };
        fetchStudent();
    }, []);

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
                        {"Hello 👋 " + Name}
                    </h1>
                </div>
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-8 shadow-md">
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
                        />
                    </div>

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
                            value={phone}
                            disabled={true}
                            placeholder="Phone Number"
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
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentname">
                            Parent Name
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentname"
                            type="text"
                            value={parentName}
                            disabled={true}
                            placeholder="Parent Name"
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentPhoneNumber">
                            Parent Phone Number
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentPhoneNumber"
                            type="text"
                            value={phone}
                            disabled={true}
                            placeholder="Parent Phone Number"
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentaddress">
                            Parent Address
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentaddress"
                            type="text"
                            value={parentAddress}
                            disabled={true}
                            placeholder="Parent Address"
                        />
                    </div>

                    <div class="flex w-full items-center justify-center bg-grey-lighter">
                        <button
                            onClick={toProfileUpdate}
                            class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Update Details
                        </button>
                    </div>
                </form>
                {/* </div> */}
            </div>
            <Footer />
        </>
    );
}

export default UpdateStudent;
