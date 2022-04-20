import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function Inventory() {
    return (
        <div className="p-26">
            <div class=" items-center justify-center mb-10 bg-white">
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
            Add Inventory
            </button>
        </a>
        
        
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
                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#" class="mr-2">
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined
                                                        className="text-gray-500
                                                        mr-2
                                                        hover:text-gray-800"
                                                    />
                                                </i>
                                            </a>
                                            <a href="#" class="mx-2">
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined
                                                        className="text-yellow-400
                                                        mx-2
                                                        hover:text-yellow-500"
                                                    />
                                                </i>
                                            </a>
                                            <a href="#" class="ml-2">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            White Board
                                        </td>
                                        <td class="p-3">2022/04/01</td>
                                        <td class="p-3 uppercase pl-8">
                                            2
                                        </td>
                                        <td class="p-3 uppercase">
                                            9000.00
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#" class="mr-2">
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined
                                                        className="text-gray-500
                                                        mr-2
                                                        hover:text-gray-800"
                                                    />
                                                </i>
                                            </a>
                                            <a href="#" class="mx-2">
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined
                                                        className="text-yellow-400
                                                        mx-2
                                                        hover:text-yellow-500"
                                                    />
                                                </i>
                                            </a>
                                            <a href="#" class="ml-2">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            White Board
                                        </td>
                                        <td class="p-3">2022/04/01</td>
                                        <td class="p-3 uppercase pl-8">
                                            2
                                        </td>
                                        <td class="p-3 uppercase">
                                            9000.00
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3">
                                            <a href="#" class="mr-2">
                                                <i class="material-icons-outlined text-base">
                                                    <EyeOutlined
                                                        className="text-gray-500
                                                        mr-2
                                                        hover:text-gray-800"
                                                    />
                                                </i>
                                            </a>
                                            <a href="#" class="mx-2">
                                                <i class="material-icons-outlined text-base">
                                                    <EditOutlined
                                                        className="text-yellow-400
                                                        mx-2
                                                        hover:text-yellow-500"
                                                    />
                                                </i>
                                            </a>
                                            <a href="#" class="ml-2">
                                                <i class="material-icons-round text-base">
                                                    <DeleteOutlined className="text-red-400 ml-2 hover:text-red-500" />
                                                </i>
                                            </a>
                                        </td>
                                        <td class="p-3 font-medium capitalize">
                                            White Board
                                        </td>
                                        <td class="p-3">2022/04/01</td>
                                        <td class="p-3 uppercase pl-8">
                                            2
                                        </td>
                                        <td class="p-3 uppercase">
                                            9000.00
                                        </td>
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
