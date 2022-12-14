import React from "react";

// Assets
import trollFacePng from '../../assets/imgs/troll-face.png';

export default function Header() {
    return (
        <header className="app-header">
            <div className="app-title">
                <img src={trollFacePng} alt="troll face from memes" />
                <h1 className="app-title__text">Meme Generator</h1>
            </div>
            <h3 className="project-number">
                React Course - Project 3
            </h3>
        </header>
    )
}