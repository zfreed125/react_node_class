import React from "react";
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"
import "./style.css"

function App() {
    return (
        <div>
            <Info />
            <About />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))