import React from "react"

export default function Header() {
    return(
        <header>
            <nav className="nav">
                <img src="./logo-react-icon.png" className="pic" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
