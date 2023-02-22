import React from "react";
import ottoman from "../ottoman1.png";
import russian from "../Russian-woman.mp4";
import Carousel from "./Carousel";
import Author from "./Carousel";

const Header = () => (
  <div className="opacity">
  <header className="header">
    <h2 className="header-title">Discover the Beauty of Global Cultures with AI Art</h2>
    <h3 className="header-sub">About</h3>
    <p className="header-sub-p">Welcome to the cutting-edge world of AI art, where machines and technology are revolutionizing the way we create and appreciate art. Here, we're passionate about showcasing the diverse and vibrant cultural traditions of the world through the lens of AI-generated art. From the intricate calligraphy of Japan to the bold patterns of Africa, we believe that AI art has the potential to bring the world's many cultures to life in exciting and innovative ways. Check out our latest video:</p>
    <iframe className="video" width={300} height={400} src={russian} title="No to war"></iframe>
    <h3 className="header-sub1">Artworks</h3>
    <Carousel />
  </header>
  </div>
);

export default Header; 
