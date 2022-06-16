import React from "react";
import ReactDOM from "react-dom"
import Info from "./componants/Info"
import About from "./componants/About"
import Interests from "./componants/Interests"
import Footer from "./componants/Footer"
import "./style.css"

function App() {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))