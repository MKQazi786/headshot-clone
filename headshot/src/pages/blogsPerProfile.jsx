import React from "react";
import Header from "../components/header";
import "../cssPages/perBlog.css";
import MP from "../image/MedicalProfile.png"

const blogsPerProfile = () => {
    return (
        <>
            <Header />
            <div className="medicalHeadShot" >
                <p>
                    PUBLISHED APRIL 26, 2022 
                    <p>Professional Medical <br /> Headshot for Doctor</p>
                    BY 
                    <b>Kurt Clayson</b>

                    <div className="bootstrapIcons" >
                       <a href="https://www.facebook.com/"> <i className="bi bi-facebook" id="icon" ></i></a>
                       <a href="https://twitter.com/?lang=en"> <i className="bi bi-twitter" id="icon" ></i></a>
                       <a href="https://www.linkedin.com/"> <i className="bi bi-linkedin" id="icon" ></i></a>
                       <a href="https://www.instagram.com/"> <i className="bi bi-instagram" id="icon" ></i></a>
                    </div>
                </p>
            </div>

            <main>
                <img src={MP} alt="" width={1000} />
            </main>
        </>
    )
}

export default blogsPerProfile;