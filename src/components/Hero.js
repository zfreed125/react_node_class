import React from "react";
import photo_grid from "../assets/anime.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={photo_grid} alt="photo_grid" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Anime is an amazing cool expirience, and has some of the best art nowadays</p>
        </section>
    )
}