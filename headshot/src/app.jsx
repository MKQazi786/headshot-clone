import React from "react"
import { Routes, Route} from "react-router-dom"
import Home from "./pages/home.jsx"
import Blog from "./pages/blog.jsx"

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>            
    );
};

export default App;
