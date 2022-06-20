import React from "react";
import pic from "../assets/clone.jpg"

export default function Info() {
    return (
        <info>
            <img src={pic} alt="pic" width="200px" className="info--img" />
            <h1 className="info--name">Zach Freed</h1>
            <h3 className="info--occupation">App Developer</h3>
        </info>
    )
}