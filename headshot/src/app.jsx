import React from "react"
import { Routes, Route} from "react-router-dom"
import Home from "./pages/home.jsx"
import Blog from "./pages/blog.jsx"
import BlogsPerProfile from "./pages/blogsPerProfile.jsx"
import TermsAndCondition from "./pages/termsAndCondition.jsx"

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blogsPerProfile" element={<BlogsPerProfile />} />
                <Route path="/termsAndCondition" element={<TermsAndCondition />} />
             </Routes>            
    );
};

export default App;
