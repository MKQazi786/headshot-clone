import React from "react";
import Logo from "../image/Logo.png";

const Header = () => {
    return (
        <header>
            <nav className="mainNavBar" id="mainNavBar" >
                <img src={Logo} alt="This is logo" />
                <nav className="navbar">
                    <li><a href="">Home</a></li>
                    <li><a href="">How it works</a></li>
                    <li><a href="">reviews</a></li>
                    <li><a href="">pricing</a></li>
                    <li><a href="">faq's</a></li>
                    <li><a href="">blog</a></li>
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