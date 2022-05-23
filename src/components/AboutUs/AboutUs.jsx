import React from "react";
import Logo from "../../Assets/Images/Braintech.svg";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div class="section">
            <div class="container">
                <div class="content-section">
                    <div class="title">
                        <h1>
                            <b>WHO WE ARE</b>
                        </h1>
                    </div>
                    <div class="content">
                        <h3 className="uppercase">BrainTech Institute</h3>
                        <p>
                            Established in 2020, as a secondary educational
                            institute catering to the young individuals
                            waiting to contribute to the growth of the
                            country, “BRAINTECH” is perhaps the most common
                            name that comes to the minds of both parents
                            and students in search of assistance in
                            studies. Over the years our institute has
                            produced some of the top scoring students in
                            the Island in the O/L & A/L classes who not
                            only have the subject knowledge but also are
                            talented in applying it in real
                            life situations.
                        </p>
                        <br />
                        <p>Thank You</p>
                    </div>
                </div>
                <div class="image-sec">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
