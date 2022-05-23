import React from "react";
import {
    BsFillTelephoneFill,
    BsFacebook,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import ContactUsImg from "../../Assets/Images/contactus.png";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div class="section">
            <div class="container">
                <div class="content-section">
                    <div class="title">
                        <h1>
                            <b>GET IN TOUCH</b>
                        </h1>
                    </div>
                    <div class="content">
                        <h3 className="uppercase">BrainTech Institute</h3>
                        <br />
                        <p className="mb-2 font-bold">
                            <BsFillTelephoneFill className="inline-block" />{" "}
                            &ensp; - &ensp; 078 265 3451
                        </p>
                        <p className="mb-2 font-bold">
                            <AiTwotoneMail className="inline-block" />{" "}
                            &ensp; - &ensp; braintech.institute@outlook.com
                        </p>
                        <p className="mb-2 font-bold">
                            <BsFacebook className="inline-block" /> &ensp;
                            - &ensp; BrainTech Institute Official
                        </p>
                        <p className="mb-2 font-bold">
                            <BsTwitter className="inline-block" /> &ensp; -
                            &ensp; BrainTech Institute
                        </p>
                        <p className="mb-2 font-bold">
                            <BsLinkedin className="inline-block" /> &ensp;
                            - &ensp; BrainTech Institute
                        </p>
                        <p className="mb-2 font-bold">
                            <MdLocationPin className="inline-block" />{" "}
                            &ensp; - &ensp; 301/A Galle Road, Colombo 03
                        </p>
                    </div>
                </div>
                <div class="image-section">
                    <img src={ContactUsImg} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
