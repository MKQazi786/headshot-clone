import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Logo from "./image/Logo.png";
import banner from "./image/Hero banner.png";
import insta from "./image/instagram.png";
import tinder from "./image/tinder.png";
import linkedin from "./image/linkedin.png";
import tiktok from "./image/tiktok.png";
import headShotPic from "./image/headshot of men.png";

function App() {
    return (
        <div>
            <header>
                <nav className="mainNavBar" >
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

                <main>
                    <img src={banner} alt="this is banner" className="banner" />
                </main>
            </header>

            <div className="iconDiv" >
                <p> As seen on </p>

                <div className="text-icon">
                    <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>
                    <a href="https://tinder.com/"><img src={tinder} alt="" /></a>
                    <a href="https://www.tiktok.com/en/"><img src={tiktok} alt="" /></a>
                    <a href="https://pk.linkedin.com/"><img src={linkedin} alt="" /></a>
                </div>

            </div>

            <div>

                <img width={500} src={headShotPic} alt="" />

                <div>

                    <h2>
                        Upgrade your profile with 100 AI headshots for $15
                    </h2>

                    <p>
                        An all-inclusive solution for elevating your professional LinkedIn profiles,
                        captivating visuals on your personal social media accounts, and everything
                        in between!
                    </p>

                    <button>create yours now</button>
                </div>


            </div>

        </div >
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))