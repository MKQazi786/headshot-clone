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
import icon1 from "./image/content img cam.png";
import icon2 from "./image/content img download pic.png";
import icon3 from "./image/content img AI.png";
import mmp from "./image/many men pics.png";
import hiw1 from "./image/how it works 1.png";
import hiw2 from "./image/how it works 2.png";
import hiw3 from "./image/how it works 3.png";
import Qicon from "./image/quatation icon.png";
import profile1 from "./image/profile review 1.png";
import profile2 from "./image/Profile review 2.png";
import profile3 from "./image/Profile review 3.png";
import profile4 from "./image/khubaib1.png";
import falseImage from "./image/false.png";
import { useRef } from "react";



function App() {
    const containerRef = useRef(null);
    const before = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 200;
        }
    }

    const after = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 200;
        }
    }


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

            <div className="content">
                <div>

                    <div>
                        <p>Why choose us?</p>
                        <p1>
                            Craft top-tier professional portraits to suit all your needs,
                            from a polished business headshot to compelling content marketing
                            and even impressive offline collateral.
                        </p1>
                    </div>

                    <icon1 className="icon-1"  >
                        <img src={icon1} alt="" />
                        <div >
                            <h3>No more photoshoots </h3>
                            <p>
                                Save on expensive photographers. Explore our hyper-realistic AI
                                photos and elevate your visuals.
                            </p>
                        </div>
                    </icon1>

                    <icon2 className="icon-1">

                        <img src={icon2} alt="" />
                        <div>

                            <h3>Download your photo's</h3>
                            <p>
                                Handpick and download favorites from your private album.
                            </p>
                        </div>
                    </icon2>

                    <icon3 className="icon-1" >

                        <img src={icon3} alt="" />
                        <div>

                            <h3> The best AI results in seconds</h3>
                            <p>
                                Custom AI model created just for you based on your uploaded images.
                            </p>
                        </div>
                    </icon3>
                </div>

                <div>
                    <img width={450} src={mmp} alt="" />
                </div>
            </div>

            <div className="hiwDiv">
                <div>
                    <p>How it works</p>
                    <b>
                        Capture professional hyper-realistic portrait photos, ideal for your
                        LinkedIn or other socials, marketing, or simply for private use.
                    </b>
                </div>

                <div className="worksImage">
                    <img src={hiw1} alt="" />
                    <img src={hiw2} alt="" />
                    <img src={hiw3} alt="" />
                </div>

            </div>

            <div className="reviewDiv">
                <div>
                    <p>
                        Review and download your favorite <br /> headshots from a collection of 100+.
                    </p>
                    <b>
                        Explore the impact of new headshots on people's lives.
                    </b>
                </div>

                <div className="carousel" >
                    <button onClick={before} class="previous round">&#8249;</button>
                    <button onClick={after} class="next round">&#8250;</button>
                </div>

            </div>

            <div className="profileContainer" ref={containerRef} >

                <div className="profileDiv" >
                    <p>Great plat form</p>

                    <p><img src={Qicon} alt="" align="left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <hr />
                    <img src={profile1} alt="" />
                </div>

                <div className="profileDiv" >
                    <p>Great plat form</p>

                    <p><img src={Qicon} alt="" align="left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <hr />
                    <img src={profile2} alt="" />
                </div>

                <div className="profileDiv" >
                    <p>Great plat form</p>

                    <p><img src={Qicon} alt="" align="left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <hr />
                    <img src={profile2} alt="" />
                </div>

                <div className="profileDiv" >
                    <p>Great plat form</p>

                    <p><img src={Qicon} alt="" align="left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <hr />
                    <img src={profile4} alt="" width={300} align="left" />
                    <p>Muhammad khubaib</p>
                </div>

                <div className="profileDiv" >
                    <p>Great plat form</p>

                    <p><img src={Qicon} alt="" align="left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <hr />
                    <img src={profile3} alt="" />
                </div>

                <div className="profileDiv" >
                    <p>Great plat form</p>

                    <p><img src={Qicon} alt="" align="left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <hr />
                    <img src={profile3} alt="" />
                </div>


                <div className="profileDiv" >
                    <p>Great plat form</p>

                    <p><img src={Qicon} alt="" align="left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <hr />
                    <img src={profile3} alt="" />
                </div>
            </div>

            <div className="pricingDiv">
                <div>
                    <p>
                        High-quality headshots, no premium price.
                    </p>
                    <b>
                        Upgrade your LinkedIn presence,
                        supercharge job applications, or elevate your company's website with our tailored headshot packages.
                    </b>
                </div>

                <div>

                    <div className="profileDiv" >
                        <p>STARTER</p>
                        <p>€15</p>
                        <p>All features are included for the perfect headshot</p>
                        <ul>
                            <li>100 ultra-realistic headshots</li>
                            <li>Unlimited styles</li>
                            <li>512x640 px</li>
                            <li>3 sec.turnaround time</li>
                            <li>Non-refundable</li>
                            <img src={falseImage} alt="" /> No human edits
                        </ul>
                        <button>Create Yours Now &rarr;	</button>
                    </div>

                    <div className="profileDiv" >
                        <p>BASIC</p>
                        <p>€20</p>
                        <p>All features are included for the perfect headshot</p>
                        <ul>
                            <li>200 ultra-realistic headshots</li>
                            <li>Unlimited styles</li>
                            <li>640x640 px</li>
                            <li>3 sec.turnaround time</li>
                            <li>Non-refundable</li>
                            <img src={falseImage} alt="" /> No human edits
                        </ul>
                        <button>Create Yours Now &rarr;	</button>
                    </div>

                    <div className="profileDiv" >
                        <p>PREMIUM</p>
                        <p>€30</p>
                        <p>All features are included for the perfect headshot</p>
                        <ul>
                            <li>300 ultra-realistic headshots</li>
                            <li>Unlimited styles</li>
                            <li>640x640 px</li>
                            <li>3 sec.turnaround time</li>
                            <li>Non-refundable</li>
                            <li> 2 human edits </li>
                        </ul>
                        <button>Create Yours Now &rarr;	 </button>
                    </div>
                </div>

            </div>









        </div >
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))