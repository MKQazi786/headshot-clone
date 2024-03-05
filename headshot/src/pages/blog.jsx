import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../blog.css"
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
                
                <BlogsProfile/>
                
            </div>
        </div>
    )
}

export default Blog;