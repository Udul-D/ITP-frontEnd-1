import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white w-full content-center">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-green-800 py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-teal-400 ">Send</span> Your
                    Feedback for Us
                </h1>
                <div className="w-full lg:mt-5">
                    <input
                        type="text"
                        placeholder="Enter Your Feedback"
                        className="text-gray-800 sm:w-full sm:ml-0 lg:ml-7 sm:mr-5 w-full mb-4 py-2.5 lg:w-6/12 lg:mr-10 lg:mb-5 rounded px-2 focus:outline-none md:ml-4"
                    />
                    <button className="lg:ml-7 md:ml-4 sm:ml-0 bg-teal-600 text-white hover:bg-teal-700 duration-300 px-20 py-2.5 font-[Poppins] rounded-md md:w-auto w-full">
                        Send Feedback
                    </button>
                </div>
            </div>
            <ItemsContainer />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span> </span>
                <span>
                    © BrainTEch Institute 2022. All rights reserved.
                </span>
            </div>
            <div className="mx-96 px-52 pb-3" style={{paddingLeft:"128px", paddingRight:"96px"}}>
                <SocialIcons />
            </div>
        </footer>
    );
};

export default Footer;
