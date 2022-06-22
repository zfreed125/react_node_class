import React from "react";
import Katie from "../assets/katee_zaferes.png"
import Star from "../assets/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={Katie} alt="katie" className="card--photo" />
            <div className="card--stats">
                <img src={Star} alt="star" className="card--star" />
                <span>5.0</span>
                <span className="grey">(6) - </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}