import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import jsPDF from "jspdf";
import "jspdf-autotable";
import Notification from "../Notification/index";
import ConfirmDialog from "../ConfirmDialog/index";




export default function Inventory() {

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

    const [inventory, setInventory] = useState([]);
    const [updateClicked, setUpdateClicked] = useState(false);
    const [itemName, setItemName] = useState("");
    const [selectDate, setSelectDate] = useState(null);
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        const fetchInventory = async () => {
            const res = await axios.get("/api/inventory/all");
            setInventory(res.data);
            console.log(res.data);
        };
        fetchInventory();
    }, []);
    let navigate = useNavigate();

    const addInventory = () => {
        const path = `/admin/inventory/add`;
        navigate(path);
    };

    const handleDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        });
        axios
            .delete(`/api/inventory/delete/${id}`, {
                headers: { authToken: localStorage.getItem("authToken") },
            })
            .then((res) => {
                console.log("deleted");
                window.location.reload();
                setNotify({
                    isOpen: true,
                    message: "Event deleted successfully",
                    type: "error",
                });
            })
            .catch((err) => {
                console.log("Delete Error"+err);
            });
    };
    const handleUpdate = async (
        id,
        e,
        itemName,
        selectDate,
        quantity,
        price,
        

    ) => {
        navigate(`/admin/inventory/update/${id}`, {
            state: {
            itemName: itemName,
            boughtDate: selectDate,
            quantity: quantity,
            price: price,
            
            },
        });
    };

    const columns = [
        { title: "Item Name", field: "itemName" },
        { title: "Date", field: "boughtDate" },
        { title: "Quantity", field: "quantity" },
        { title: "Price", field: "price" },
        
    ];

    const downLoadPdf = () => {
        const doc = new jsPDF();
        doc.text(itemName + " Inventory Sheet", 20, 10);
        doc.autoTable({
            columns: columns.map((col) => ({
                ...col,
                dataKey: col.field,
            })),
            body: inventory,
        });
        doc.save(itemName + " Inventory Sheet");
    };

    return (
        <div className="p-26">
            <div class=" items-center justify-center mb-10 bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                        <div className="pb-4">
                                
                                <div className="flex">
                                    <button
                                        class="
                                            bg-green-600
                                            hover:bg-green-800
                                            text-white
                                            py-1
                                            px-3
                                            flex
                                            sm
                                            rounded-full mb-3"
                                        onClick={addInventory}>
                                        ADD INVENTORY
                                    </button>
                                    <div className="ml-96">
                                    <button
                                            className="bg-green-600
                                            hover:bg-green-800
                                            text-white
                                            py-2
                                            px-5
                                            flex
                                            sm
                                            ml-96
                                            outline-none
                                            font-bold
                                            rounded-full mb-3"
                                            onClick={() => downLoadPdf()}>
                                            <span>
                                                <span>
                                                    <DownloadOutlined className="font-bold" />{" "}
                                                </span>
                                                Download
                                            </span>
                                        </button>
                                        </div>
                                </div>
                            </div>

    

            
                                        


                            <table class="w-full">
                                <thead class="bg-green-200 border-b-2 border-gray-200">
                                    <tr>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Action
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Item Name
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Bought Date
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Quantity
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inventory.map((r) => (
                                        <tr class="bg-green-100 lg:text-black">
                                            <td class="p-3">
                                                
                                                <a class="text-yellow-400 hover:text-gray-100 mx-2 px-2">
                                                    <i class="material-icons-outlined text-base">
                                                        <EditOutlined
                                                            onClick={(e) =>
                                                                handleUpdate(
                                                                    r._id,
                                                                    e,
                                                                    r.itemName,
                                                                    r.selectDate,
                                                                    r.quantity,
                                                                    r.price,
                                                                )
                                                            }
                                                        />
                                                    </i>
                                                </a>
                                                <a
                                                    
                                                    class="text-red-400 hover:text-gray-100 ml-2 px-2">
                                                    <i class="material-icons-round text-base">
                                                        <DeleteOutlined
                                                            onClick={() =>{
                                                                setConfirmDialog({
                                                                    isOpen: true,
                                                                    title: "Delete Inventory",
                                                                    subTitle:
                                                                        "Are you sure you want to delete this inventory?",
                                                                    onConfirm: () => {
                                                                        handleDelete(inventory._id);
                                                                    },                           
                                                            });
                                                        }}
                                                        />
                                                    </i>
                                                </a>
                                                {updateClicked && (
                                                    <button
                                                        onClick={
                                                            handleUpdate
                                                        }
                                                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-10 rounded">
                                                        Update
                                                    </button>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={itemName}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setItemName(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.itemName}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3">
                                                {updateClicked ? (
                                                    <input
                                                        type="date"
                                                        value={selectDate}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setSelectDate(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.boughtDate.split("T")[0]}
                                                    </span>
                                                )}
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={quantity}
                                                        onChange={(e) =>
                                                            setQuantity(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                    />
                                                ) : (
                                                    <span>{r.quantity}</span>
                                                )}
                                            </td>
                                            
                                            
                                            <td class="p-3 font-medium capitalize">
                                                {updateClicked ? (
                                                    <input
                                                        type="text"
                                                        value={price}
                                                        className="rounded-sm focus:outline-1 focus:outline-green-500 focus:shadow-outline"
                                                        onChange={(e) =>
                                                            setPrice(
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {r.price}
                                                    </span>
                                                )}
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    );
}
