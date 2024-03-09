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
                <p>
                    Why do so many construction companies fail? According to the US Department
                    of Commerce, construction and contracting businesses have the highest failure
                    rate of any other business. Up to 96% of these companies fail before reaching
                    10 years in business. <br /> 
                    <br />

                    You know exactly what I’m talking about if you own or operate a construction company. It is beyond difficult to build a successful construction business, and yet far easier to fail. Having owned multiple construction companies, I am speaking from experience. It took several years of iteration and learning before I finally figured it out. <br />
                    <br />

                    You can avoid making the same mistakes most of us make early on. In this article, I’ll give you an inside look at the primary reasons why construction companies fail.  Implement the outlined principles below to ensure that your company thrives in the top 4% of businesses in the construction industry. <br />
                    <br />
                    Construction companies, general contractors, and specialty contractors universally face the same eight problems.</p>

                    <h5>Here’s why construction companies fail:</h5>
            
            </main>
        </>
    )
}

export default blogsPerProfile;