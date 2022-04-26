import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Space } from "antd";
export default function AddResult() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">Results</h1>
            </div>
            <div className="mx-72 w-3/5">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form
                        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                        onFinish={onFinish}
                        autoComplete="off">
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Exam Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Exam Name"
                            />
                        </div>
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username">
                            Results
                        </label>
                        <Form>
                            <Form.List name="users">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(
                                            ({
                                                key,
                                                name,
                                                ...restField
                                            }) => (
                                                <Space
                                                    key={key}
                                                    style={{
                                                        display: "flex",
                                                        marginBottom: 8,
                                                    }}
                                                    align="baseline">
                                                    <Form.Item
                                                        {...restField}
                                                        name={[
                                                            name,
                                                            "first",
                                                        ]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Missing Student Name",
                                                            },
                                                        ]}>
                                                        <Input
                                                            placeholder="Student Name"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                                        />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[
                                                            name,
                                                            "last",
                                                        ]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Missing Student ID",
                                                            },
                                                        ]}>
                                                        <Input
                                                            placeholder="Student ID"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                                        />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[
                                                            name,
                                                            "first",
                                                        ]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Missing Marks",
                                                            },
                                                        ]}>
                                                        <Input
                                                            placeholder="Marks"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                                        />
                                                    </Form.Item>
                                                    <MinusCircleOutlined
                                                        onClick={() =>
                                                            remove(name)
                                                        }
                                                    />
                                                </Space>
                                            ),
                                        )}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                block
                                                className="bg-green-600 mx-0 mt-4 hover:bg-green-700 text-white font-bold py-2 px-12 rounded mb-10"
                                                icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-green-600 mx-64 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
