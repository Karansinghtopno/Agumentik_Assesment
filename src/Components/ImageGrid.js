import React from "react";
import "./ImageGrid.css";
import hero1 from "../heroImages/hero1.jpg";
import hero2 from "../heroImages/hero2.jpg";
import hero3 from "../heroImages/hero3.jpg";
import hero4 from "../heroImages/hero4.jpg";
import hero5 from "../heroImages/hero5.jpg";
// import hero6 from "../heroImages/hero6.jpg";

const ImageGrid = () => {
  return (
    <div className="container"
      style={{
        position: "fixed",
        zIndex: "-100",
      }}
    >
      <div>
        <img className="imagesize image2" src={hero1} alt="hero1" />
      </div>
      <div>
        <img className="imagesize image1" src={hero2} alt="hero2" />
      </div>
      <div>
        <img className="imagesize image3" src={hero3} alt="hero3" />
      </div>
      <div>
        <img className="imagesize image4" src={hero4} alt="hero4" />
      </div>
      <div>
        <img className="imagesize image5" src={hero5} alt="hero5" />
      </div>
      {/* <div>
        <img className="imagesize image6" src={hero6} alt="hero6" />
      </div> */}
    </div>
  );
};

export default ImageGrid;
