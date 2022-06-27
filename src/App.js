import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./style.css"
// import Katie from "./assets/katee_zaferes.png"


export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                // img={Katie}
                img="katee_zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}