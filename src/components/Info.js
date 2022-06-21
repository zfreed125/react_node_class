import React from "react";
import pic from "../assets/jesse.png"

export default function Info() {
    return (
        <info>
            <img src={pic} alt="pic" className="info--img" />
            <h1 className="info--name">Jesse</h1>
            <h2 className="info--occupation">Arc Trooper</h2>
            <h3 className="info--gov">Galactic Republic</h3>
        </info>
    )
}