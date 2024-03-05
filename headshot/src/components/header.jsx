import React from "react";
import Logo from "../image/Logo.png";
import { useNavigate } from 'react-router-dom'
import "../style.css";


const Header = () => {

    const navigate = useNavigate();
    return (
        <header>
            <nav className="mainNavBar" id="mainNavBar" >
                <img src={Logo} alt="This is logo" />
                <nav className="navbar">
                    <li onClick={() => navigate("/")} >Home</li>
                    <li><a href="#hiwDiv">How it works</a></li>
                    <li><a href="#reviewDiv">reviews</a></li>
                    <li><a href="#pricingDiv">pricing</a></li>
                    <li><a href="#questionDiv">faq's</a></li>
                    <li onClick={() => navigate("/blog")}>blog</li>
                </nav>
                <div className="headerBtn" >
                    <a href=""><span>LOG IN</span></a>
                    <button>GET STARTED</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;