import react, { useEffect, useState } from "react";
import axios from "axios";
import { LockClosedIcon } from "@heroicons/react/solid";
import { AiTwotoneMail } from "react-icons/ai";
import logo from "../../Assets/Images/OnlyLogoColored.svg";
import "./LoginForm.css";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const logout = () => {
            axios
                .post("/api/logout", {
                    headers: {
                        authToken: localStorage.getItem("authToken"),
                    },
                })
                .then((res) => {
                    console.log(res);
                    localStorage.removeItem("authToken");
                    window.location.reload();
                });
        };
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
        };
        axios
            .post("/api/login", data)
            .then((result) => {
                localStorage.setItem("authToken", result.data.authToken);
                localStorage.setItem("isLoggedIn", true);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            {/* 
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="LogoImage" src={logo} alt="logo" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{"  "}
                            <a
                                href="/"
                                className="font-medium text-green-600 hover:text-green-500">
                                Click here to Sign up
                            </a>
                        </p>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        action="#"
                        method="POST">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="sr-only">
                                    UserName
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="sr-only">
                                    Password
                                </label>
                                <AiTwotoneMail
                                    className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"></input>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="/"
                                    className="font-medium text-green-600 hover:text-green-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={onSubmit}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-green-500 group-hover:text-green-600"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
