import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import Onlylogo from "../../Assets/Images/OnlyLogoColored.svg";
import "./header.css";

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
    return (
        <>
            <nav className="lg:w-screen bg-black">
                <NavbarContainer>
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
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavBtnLink to="/login">Sign In</NavBtnLink>
                    </NavButton>
                </NavbarContainer>
            </nav>
        </>
    );
};

export default Header;
