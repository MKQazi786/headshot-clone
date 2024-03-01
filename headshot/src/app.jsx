import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import Blog from "./pages/blog.jsx"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
