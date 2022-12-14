import React from "react";

export default function MemeForm() {
    return (
        <main className="meme-generator-container">
            <form className="meme-generator-form">
                <div className="meme-generator-form__text-inputs">
                    <input type="text" name="top-text" id="topText" className="top-text meme-inputs" placeholder="top text..." />
                    <input type="text" name="bottom-text" id="bottomText" className="bottom-text meme-inputs" placeholder="bottom text..." />
                </div>
                <button type="submit" className="meme-generator-form__button">Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}