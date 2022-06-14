import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import logo from "./logo-react-icon.png"


// import Header from "./Header"
function Header() {
    return(
        <header>
            <nav className="nav">
                <img src={logo} className="pic" alt="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Body(){
    return(
        <div className="nav-body">
        <h1 className="nav-title">Reasons I am excited to learn React</h1>    
        <ol className="nav-list">
            <li>To Help my Dad</li>
            <li>To Become More Knowlegable</li>
            <li>To Finally Dive into a Hireable Skill</li>
            <li>To Accomplish Something as an Adult </li>
            <li>To Make My Dad Proud</li>
        </ol>
        </div>
    )
}

function Footer(){
    return(
        <footer className="nav-foot">
            © 2022 Freed development. All rights reserved.
        </footer>
    )
}

function Page() {
    return(
        <div>
            <Header />           
            <Body />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))
