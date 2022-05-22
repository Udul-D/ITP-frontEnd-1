import { Fragment, useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";

function AddAdmin() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nic, setNIC] = useState();
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            NIC: nic,
            username: userName,
            phoneNumber: phoneNumber,
            email: email, 
            address: address,
            password: password,
        };

        try {
            await axios
                .post("/api/admin/register", {
                    headers: {
                        authToken: localStorage.getItem("authToken"),
                    },
                    data,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

            <div className="mx-96">
                {/* <div className="bg-gray-100 shadow-md rounded p-5 mb-10 mt-5"> */}
                <div className="text-center py-5 bg-green-600 mt-8">
                    <h1 className="font-bold text-3xl text-white">
                        Admin Registration
                    </h1>
                </div>
                <form  onSubmit={onSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-8 shadow-md">

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
                            placeholder="First Name"
                            onChange={(e) =>
                                setFirstName(e.target.value)
                            }
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
                            placeholder="Last Name"
                            onChange={(e) =>
                                setLastName(e.target.value)
                            }
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="NIC">
                            NIC
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="nic"
                            type="text"
                            placeholder="NIC"
                            onChange={(e) =>
                                setNIC(e.target.value)
                            }
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username">
                            User Name
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="User Name"
                            onChange={(e) =>
                                setUserName(e.target.value)
                            }
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
                            placeholder="phonenumber"
                            onChange={(e) =>
                                setPhoneNumber(e.target.value)
                            }
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
                            placeholder="Email"
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="address">
                            Address
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Address"
                            onChange={(e) =>
                                setAddress(e.target.value)
                            }
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="passowrd">
                            Password
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="passowrd"
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="confirmpassowrd">
                            Confirm Password
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="confirmpassowrd"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div class="flex w-full items-center justify-center bg-grey-lighter">
                        <button class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Submit
                        </button>
                    </div>
                </form>
                {/* </div> */}
            </div>
            <Footer />
        </>
    );
}

export default AddAdmin;
