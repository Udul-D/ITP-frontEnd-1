import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const SocialIcons = ({}) => {
    return (
        <div className="text-teal-500">
            <a href="/">
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
                    <BsFacebook />
                </span>
            </a>

            <a href="/">
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
                    <AiFillInstagram />
                </span>
            </a>

            <a href="/">
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
                    <BsLinkedin />
                </span>
            </a>

            <a href="/">
                <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
                    <AiOutlineTwitter />
                </span>
            </a>
        </div>
    );
};

export default SocialIcons;
