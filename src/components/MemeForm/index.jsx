import React, {useState} from 'react';

// Data
import memeData from '../../data/memesData';

export default function MemeForm() {
    const [allMemeImages, setAllMemeImages] = useState(memeData);
    const [formInputs, setFormInputs] = useState({});
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: allMemeImages.data.memes[0].url
    });

    const getMemeImage = (e) => {
        e.preventDefault();
        // Get a random index from the array of meme data
        const memeArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * (memeArray.length - 1));
        const memeURL = memeArray[randomIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeURL
        }));
    }

    return (
        <main className="meme-generator-container">
            <form className="meme-generator-form" onSubmit={getMemeImage}>
                <div className="meme-generator-form__text-inputs">
                    <input type="text" name="top-text" id="topText" className="top-text meme-inputs" placeholder="top text..." />
                    <input type="text" name="bottom-text" id="bottomText" className="bottom-text meme-inputs" placeholder="bottom text..." />
                </div>
                <button type="submit" className="meme-generator-form__button">Get a new meme image 🖼️</button>
            </form>
            <img src={meme.randomImage} alt="A lovely juicy meme" className='meme-img-template'/>
        </main>
    )
}