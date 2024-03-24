import React from "react";
import Logo from "../image/Logo.png"
import "../cssPages/dashboard.css"
const asideBar = () => {
    return (
        <aside className="asideBar">
            <img src={Logo} alt="Logo" />
        </aside>
    )
}

export default asideBar;