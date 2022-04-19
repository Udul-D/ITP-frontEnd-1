import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function StudentResult() {
    return (
        <div className="p-26">
            <div class=" items-center justify-center min-h-screen bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                            <div className="pb-4">
                                <div className="flex p-3">
                                    <div className="pr-96">
                                        <span className="font-bold">
                                            Teacher Name :{" "}
                                        </span>
                                        <span className="text-gray-800">
                                            Sasindu Nanayakkara
                                        </span>
                                    </div>
                                    <div className="pr-96">
                                        <span className="font-bold">
                                            Subject :{" "}
                                        </span>
                                        <span className="text-gray-800">
                                            Science
                                        </span>
                                    </div>
                                    <div className="">
                                        <span className="font-bold">
                                            Exam Name :{" "}
                                        </span>
                                        <span className="text-gray-800">
                                            Pilot Exam
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <table class="w-full pt-4">
                                <thead class="bg-green-200 border-b-2 border-gray-200">
                                    <tr>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-center">
                                            Student ID
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-center">
                                            Student Name
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-center">
                                            Marks
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-center">
                                            Rank
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3 font-medium capitalize text-center">
                                            IT2032332
                                        </td>
                                        <td class="p-3 text-center">
                                            Tony Stark
                                        </td>
                                        <td class="p-3 uppercase pl-8 text-center">
                                            88
                                        </td>
                                        <td class="p-3 uppercase text-center">
                                            2
                                        </td>
                                    </tr>

                                    <tr class="bg-green-100 lg:text-black">
                                        <td class="p-3 font-medium capitalize text-center">
                                            IT2032332
                                        </td>
                                        <td class="p-3 text-center">
                                            Tony Stark
                                        </td>
                                        <td class="p-3 uppercase pl-8 text-center">
                                            88
                                        </td>
                                        <td class="p-3 uppercase text-center">
                                            2
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
