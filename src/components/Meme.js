import React from "react";
import memesData from "../memesData";

export default function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  let url;

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  return (
    <main>
      <div className="form">
        <div className="inputs">
          <input
            className="form-input"
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>
          <input
            className="form-input"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
        </div>
        <button className="generateBtn" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage}></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
