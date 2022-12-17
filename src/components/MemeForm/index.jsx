import React, {useState, useEffect} from 'react';


export default function MemeForm() {
    // State
    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    useEffect(() => {
        const getMemeData = async () => {
        const response = await fetch('https://api.imgflip.com/get_memes');
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const memesDataAll = await response.json();
        setAllMemes(memesDataAll);
        }
        
        getMemeData();
    }, [])

    const getMemeImage = (e) => {
        e.preventDefault();
        // Get a random index from the array of meme data
        const memeArray = allMemes.data.memes;
        const randomIndex = Math.floor(Math.random() * (memeArray.length - 1));
        const memeURL = memeArray[randomIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeURL
        }));
    }

    const handleMemeInputs = (event) => {
        const { name, value } = event.target;
        setMeme(prevInputs => (
            {
                ...prevInputs,
                [name]: value
            }
        ))
    }

    return (
        <main className="meme-generator-container">
            <form className="meme-generator-form" onSubmit={getMemeImage}>
                <div className="meme-generator-form__text-inputs">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="meme-inputs"
                    name="topText"
                    value={meme.topText}
                    onChange={handleMemeInputs}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="meme-inputs"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleMemeInputs}
                />
                </div>
                <button type="submit" className="meme-generator-form__button">Get a new meme image 🖼️</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} alt="A lovely juicy meme" className='meme-img-template'/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}