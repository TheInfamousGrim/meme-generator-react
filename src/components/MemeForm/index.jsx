import React, {useState} from 'react';

// Data
import memeData from '../../data/memesData';

export default function MemeForm() {
    const [memeImageURL, setMemeImageURL] = useState(memeData.data.memes[0].url)

    const handleNewMeme = (e) => {
        e.preventDefault();
        // Get a random index from the array of meme data
        const randomIndex = Math.floor(Math.random() * (memeData.data.memes.length - 1));
        setMemeImageURL(memeData.data.memes[randomIndex].url);
    }

    return (
        <main className="meme-generator-container">
            <form className="meme-generator-form" onSubmit={handleNewMeme}>
                <div className="meme-generator-form__text-inputs">
                    <input type="text" name="top-text" id="topText" className="top-text meme-inputs" placeholder="top text..." />
                    <input type="text" name="bottom-text" id="bottomText" className="bottom-text meme-inputs" placeholder="bottom text..." />
                </div>
                <button type="submit" className="meme-generator-form__button">Get a new meme image 🖼️</button>
            </form>
            <img src={memeImageURL} alt="A lovely juicy meme" className='meme-img-template'/>
        </main>
    )
}