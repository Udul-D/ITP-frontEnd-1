import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Notification from "../../../components/Notification/index";


function UpdateInventory() {
    const [isOpen, setIsOpen] = useState(false);
    const[notify, setNotify] =useState({
        isOpen: false,
        message: "",
        type: "",
    });

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const id = window.location.pathname.split("/")[4];
    let navigate = useNavigate();


    const [itemName, setItemName] = useState("");
    const [selectDate, setSelectDate] = useState(null);
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const location = useLocation();

    useEffect(() => {
        const getData = async () => {
            setItemName(location.state.itemName);
            setSelectDate(location.state.date);
            setQuantity(location.state.quantity);
            setPrice(location.state.price);
                };
                getData();
    }, [location]);
    console.log(itemName);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            itemName: itemName,
            boughtDate: selectDate,
            quantity: quantity,
            price: price,
        };

        console.log(id);

        try {
            await axios
                .put("/api/inventory/update/" + id, {
                    headers: {
                        authToken: localStorage.getItem("authToken"),
                    },
                    data,
                })
                .then((res) => {
                    console.log("updated"+res.data);
                    setNotify({
                        isOpen: true,
                        message: "Inventory updated successfully.",
                    type: "success",                  
                  })
                  setItemName("");
                  setSelectDate("");
                  setQuantity("");
                  setPrice("");
                  setInterval(() =>{
                    navigate("/inventory");
                  },2500);
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
            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">
                    Update Inventory
                </h1>
            </div>
            <div className="mx-96 w-1/2">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" autoComplete="off" onSubmit={onSubmit}>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="subject">
                                Item Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="itemName"
                                type="text"
                                placeholder="Item Name"
                                onChange={(e) =>
                                    setItemName(e.target.value)}
                                    value={itemName}
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="name">
                                Quantity
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="name"
                                type="text"
                                name="teacherName"
                                placeholder="Teacher Name"
                                onChange={(e) =>
                                    setQuantity(e.target.value) }
                                    value={quantity}
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="hall">
                                Price
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="hall"
                                type="text"
                                placeholder="Hall Number"
                                onChange={(e) =>
                                    setPrice(e.target.value)}
                                    value={price}
                            />
                            
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Brought Date
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
                                    selected={selectDate}
                                    required
                                    dateFormat="dd/MM/yyyy"

                                    onChange={(boughtDate) =>
                                        setSelectDate(boughtDate)}
                                        value={selectDate}
                                    
                                        
                                    
                                    // minDate={new Date()}                                
                                />
                            </div>
                        </div>
                        
                        <button 
                        type="submit"
                        class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Update
                        </button>
                    </form>
                </div>
            </div>
            
            <Notification notify={notify} setNotify={setNotify} />
            <Footer />
        </>
    );
}

export default UpdateInventory;