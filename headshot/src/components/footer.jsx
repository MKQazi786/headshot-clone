import React from "react";
import Logo from "../image/Logo.png";
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    
    const navigate = useNavigate();

    return (
        <footer>
            <div>

                <a href="#mainNavBar"><img src={Logo} alt="This is logo footer logo" /></a>

                <div>
                    <p>Social</p>
                    <a href="https://www.tiktok.com/en/"><p className="bi bi-tiktok" >Tiktok</p></a>
                </div>

                <div>
                    <p>Quick links</p>
                    <ul>
                    <li onClick={() => navigate("/")} >Home</li>
                        <a href="#reviewDiv"> <li>Reviews</li></a>
                        <a href="#hiwDiv"> <li>How It Works</li></a>
                    </ul>
                </div>

                <div>
                    <p>Legal</p>
                    <ul>
                        <li>Terms & Condition</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            </div>



            <div>
                <hr />
                &copy;2023 THENEXTPHOTO.COM All rights reserved.
            </div>
        </footer>
    )
}

export default Footer