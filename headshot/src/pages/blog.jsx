import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../cssPages/blog.css"
import BlogsProfile from "../components/blogsProfile";


const Blog = () => {


    return (
        <div className="blogBody" >
            <Header />
            <main>
                <p>Latest articles about headshot photography</p>
                <b>Insights, ideas, and inspiration for headshot photography.</b>
                <button>create yours now</button>
            </main>
            <div className="blogsDiv">
                <nav>
                    <li>All Posts</li>
                    <button>Login/Sign up</button>
                </nav>

                <BlogsProfile />
                
                
                <div className="getHeadshotDiv">

                    <p>Get your headshots today!</p>
                    <b>
                        Your professional corporate business headshots are just a few clicks away. Don't miss out on the opportunity to showcase your team's best image - get your AI generated headshots now!
                        create yours now
                    </b>

                    <a href="#">  <button className="getHeadshotDivBtn" >create yours now</button> </a>

                </div>

                <Footer/>

            </div>
        </div>
    )
}

export default Blog;