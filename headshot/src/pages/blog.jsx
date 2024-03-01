import React from "react";
import ReactDOM from "react-dom"
import Header from "../components/header";

const Blog = () => {
    return (
        <Header/>
)
}
ReactDOM.render(<Blog />, document.querySelector('#root'))

export default Blog;