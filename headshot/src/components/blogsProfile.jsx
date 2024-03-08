import React from "react";
import "../cssPages/blog.css"
import BP1 from "../image/BlogsProfile1.png"
import BP2 from "../image/BlogsProfile2.png"
import BP3 from "../image/BlogsProfile3.png"
import BP4 from "../image/BlogsProfile4.png"
import BP5 from "../image/BlogsProfile5.png"
import BP6 from "../image/BlogsProfile6.png"
import { useNavigate } from "react-router-dom";


const BlogsProfile = () => {

    
    const navigate = useNavigate()

    let handleBlogNavigate = () => {
        navigate("/blogsPerProfile")
    }

    const BlogsProfieContent = [
        {
            id: 1,
            imageSrc: BP1,
            title: "Picture-Perfect: Choosing the Right Dimensions for Professional Headshots"
        },
        {
            id: 2,
            imageSrc: BP2,
            title: "Making the Most of Your Headshot Session: Preparation, Tips and Tricks"
        },
        {
            id: 3,
            imageSrc: BP3,
            title: "Professional Medical Headshots for Doctor"
        },
        {
            id: 4,
            imageSrc: BP4,
            title: "Navigating Virtual Professional Headshots"
        },
        {
            id: 5,
            imageSrc: BP5,
            title: "Professional Outdoor Headshots for a Unique Look"
        },
        {
            id: 6,
            imageSrc: BP6,
            title: "Embracing Modern Professional Headshots: Tips for a Contemporary Look"
        },
    ]

    return (
        <div className="blogsProfile" onClick={handleBlogNavigate} >
            {
                BlogsProfieContent.map((Blog) => (
                    <div className="profile1" key={Blog.id}>
                        <img width={340} src={Blog.imageSrc} alt="" />
                        <div className="productBtn" >
                            <button>Product Update</button>  <p>June 13 2023</p>
                        </div>

                        <p>{Blog.title}</p>
                    </div>
                ))}
        </div>
    );
};

export default BlogsProfile;