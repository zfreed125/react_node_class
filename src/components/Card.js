import React from "react";
import Star from "../assets/star.png"

export default function Card(props) {
    // console.log(props)
    return (
        <div className="card">
            <img src={`../assets/${props.img}`} alt={props.img}  className="card--photo" />
            <div className="card--stats">
                <img src={Star} alt="star" className="card--star" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) - </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}