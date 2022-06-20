import React from "react";
import Insta from "../assets/Instagram_icon.png"
import Twitter from "../assets/Twitter.png"

const instagramurl = 'https://www.instagram.com/';
export default function Footer() {
    return (
        <footer>
            <a href={instagramurl + 'zach__freed/'}>
                <img src={Insta} width="40px" alt="insta" className="footer--insta" />
            </a>
            <a href='https://twitter.com/ZachFreed2'>
                <img src={Twitter} width="40px" alt="twitter" className="footer--twitter" />
            </a>
        </footer>
    )
}