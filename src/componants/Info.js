import React from "react";
import pic from "../assests/clone.jpg"

export default function Info() {
    return (
        <info>
            <img src={pic} alt="pic" width="200px" />
            <h1>Zach Freed</h1>
            <h3>App Developer</h3>
        </info>
    )
}