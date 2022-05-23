import React from "react";
import styled from "styled-components";
import { Link as LinkR, Navigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import Onlylogo from "../../Assets/Images/OnlyLogoColored.svg";
import "./header.css";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";

export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: self-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        cursor: pointer;
        font-size: 1.8rem;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0.1rem;
    padding-left: 1.5rem;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #0c6e7b;
    }

    &:hover {
        color: #009a4c;
        transition: 0.2s ease-in-out;
    }
`;

export const NavButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #16a34a;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transform: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: white;
        color: #16a34a;
    }
`;

const Header = ({ toggle }) => {
    const navigate = useNavigate();
    const login = localStorage.getItem("loggedIn");
    console.log(login);

    const id = localStorage.getItem("roleID");
    const UserRole = localStorage.getItem("role");

    // console.log("id" + id);

    const logout = () => {
        localStorage.clear();
        navigate("/login");
        console.log("logout");
        window.location.reload();
        // axios
        //     .post("/api/logout", {
        //         headers: {
        //             authToken: localStorage.getItem("authToken"),
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res);
        //         console.log("logout success");
        //         localStorage.clear();
        //     });
    };

    const profileClicked = () => {
        if (UserRole === "student") {
            navigate("/student/profile/" + id);
        } else if (UserRole === "admin") {
            navigate("/admin/profile/" + id);
        }
    };

    const navigateToDashboard = () => {
        if (UserRole === "student") {
            navigate("/student/dashboard/");
        } else if (UserRole === "admin") {
            navigate("/admin/dashboard/");
        }
    };

    const registerPage = () => {
        navigate("/student/add/");
    };

    const AboutNav = () => {
        navigate("/aboutus/");
    };

    const ContactNav = () => {
        navigate("/contactus/");
    };

    const HomeNav = () => {
        navigate("/");
    };

    const TimetableNav = () => {
        navigate("/studentTimetable");
    };

    const EventNav = () => {
        navigate("/events");
    };

    return (
        <>
            <nav className="w-full bg-black">
                <div className="flex w-full justify-between h-20 -z-10 py-0 px-6">
                    <NavLogo to="/">
                        <img src={Onlylogo} className="logo" alt="logo" />
                        <p className="text-green-600">
                            BrainTech Institute
                        </p>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks onClick={HomeNav}>Home</NavLinks>
                        </NavItem>
                        {login ? (
                            <NavItem>
                                <NavLinks onClick={navigateToDashboard}>
                                    Dashboard
                                </NavLinks>
                            </NavItem>
                        ) : (
                            <div></div>
                        )}
                        <NavItem>
                            <NavLinks onClick={AboutNav}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={ContactNav}>
                                Contact
                            </NavLinks>
                        </NavItem>
                        {/* {login ? (
                            <NavItem>
                                <NavItem>
                                    <NavLinks onClick={EventNav}>
                                        Events
                                    </NavLinks>
                                </NavItem>
                            </NavItem>
                        ) : (
                            <NavItem>
                                <NavLinks onClick={TimetableNav}>
                                    Timetable
                                </NavLinks>
                            </NavItem>
                        )} */}
                        {login ? (
                            <NavItem>
                                <NavLinks onClick={logout}>
                                    {" "}
                                    Logout
                                </NavLinks>
                            </NavItem>
                        ) : (
                            <NavItem>
                                <NavLinks onClick={registerPage}>
                                    Sign Up
                                </NavLinks>
                            </NavItem>
                        )}
                    </NavMenu>
                    {login ? (
                        <div>
                            <img
                                src="https://icon-library.com/images/profile-icon-white/profile-icon-white-7.jpg"
                                className="w-12 cursor-pointer mx-4 my-3 h-12"
                                onClick={profileClicked}
                            />
                        </div>
                    ) : (
                        <NavButton>
                            <NavBtnLink to="/login">Login</NavBtnLink>
                        </NavButton>
                    )}
                </div>
            </nav>
        </>
    );
};
export default Header;
