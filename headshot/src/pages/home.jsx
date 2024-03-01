import React from "react";
import ReactDOM from "react-dom";
import { useRef } from "react";
import "../style.css";
import Header from "../components/header";
import banner from "../image/Hero banner.png";
import insta from "../image/instagram.png";
import tinder from "../image/tinder.png";
import linkedin from "../image/linkedin.png";
import tiktok from "../image/tiktok.png";
import headShotPic from "../image/headshot of men.png";
import icon1 from "../image/content img cam.png";
import icon2 from "../image/content img download pic.png";
import icon3 from "../image/content img AI.png";
import mmp from "../image/many men pics.png";
import hiw1 from "../image/how it works 1.png";
import hiw2 from "../image/how it works 2.png";
import hiw3 from "../image/how it works 3.png";
import Qicon from "../image/quatation icon.png";
import profile1 from "../image/profile review 1.png";
import profile2 from "../image/Profile review 2.png";
import profile3 from "../image/Profile review 3.png";
import profile4 from "../image/khubaib1.png";
import falseImage from "../image/false.png";
import cta from "../image/CTA.png";
import Footer from '../components/footer'




function Home() {
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

            <Header />
            <main>
                <img src={banner} alt="this is banner" className="banner" />
            </main>

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

            <div className="hiwDiv" id="hiwDiv" >
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

            <div className="reviewDiv" id="reviewDiv">
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

            <div className="pricingDiv" id="pricingDiv" >
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
                <a href="#"><img src={cta} alt="" className="bottomOfPricingDiv" /></a>
            </div>

            <div className="questionDiv" id="questionDiv" >
                <p>Frequently asked questions</p>
                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> How are my photos handled after the training process?  </p>
                        <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="cardCard-body">
                            After the training process, we prioritize your privacy by promptly deleting all uploaded photos immediately.
                        </div>
                    </div>
                </div>

                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> Who has ownership of the ai pictures? </p>
                        <a data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample1">
                        <div class="cardCard-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laudantium ea aliquam totam recusandae repudiandae. Ratione odio cupiditate aperiam fugit dicta nemo? Corrupti cum qui quasi velit tempora dicta eos?
                        </div>
                    </div>
                </div>

                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> What type of photos are suitable for upload?</p>
                        <a data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample2">
                        <div class="cardCard-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos repellendus exercitationem voluptas in vel ipsum excepturi aliquid tenetur quisquam, officia mollitia fuga corrupti inventore illo expedita. Consectetur, omnis accusantium?
                        </div>
                    </div>
                </div>

                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> Where exactly is my data stored?  </p>
                        <a data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample3">
                        <div class="cardCard-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur asperiores iste eaque! Iusto illum sequi similique repellendus laudantium laborum quibusdam et temporibus, quam veritatis odit neque debitis, modi sed?
                        </div>
                    </div>
                </div>

                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> Is it possible to obtain a refund?</p>
                        <a data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample4">
                        <div class="cardCard-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia molestiae vero ducimus doloribus incidunt porro perferendis iste consectetur nulla nostrum. Inventore eligendi sunt expedita minus aliquid saepe, molestiae at architecto.
                        </div>
                    </div>
                </div>

                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> Is the payment process is secure? </p>
                        <a data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample5">
                        <div class="cardCard-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur facere ut! Ipsa, ut repellendus? Ullam tempora natus reprehenderit quas ipsam perferendis, magni architecto sequi unde aperiam nesciunt, alias pariatur.
                        </div>
                    </div>
                </div>

                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> Is it possible to receive an invoice?</p>
                        <a data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample6">
                        <div class="cardCard-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni incidunt explicabo quae odit aut ut minima reiciendis dolor quod. Enim omnis ipsa quod amet ea suscipit facere aperiam similique.
                        </div>
                    </div>
                </div>

                <div className="question1" >
                    <p class="d-inline-flex gap-1">
                        <p> What if the genrated photo is not perfectly resemble me? </p>
                        <a data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span class="bi bi-chevron-down"></span>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample7">
                        <div class="cardCard-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi molestiae reprehenderit distinctio, doloremque dolore, unde voluptates vel eius iure rerum a tempora laboriosam perspiciatis veniam placeat veritatis. Assumenda, eos!
                        </div>
                    </div>
                </div>

                <div className="getHeadshotDiv">

                    <p>Get your headshots today!</p>
                    <b>
                        Your professional corporate business headshots are just a few clicks away. Don't miss out on the opportunity to showcase your team's best image - get your AI generated headshots now!
                        create yours now
                    </b>

                    <a href="#">  <button className="getHeadshotDivBtn" >create yours now</button> </a>

                </div>

            </div>

            <Footer />
        </div >
    )
}

ReactDOM.render(<Home />, document.querySelector('#root'))

export default Home
