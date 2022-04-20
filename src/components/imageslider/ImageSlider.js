import React, { useState, useEffect } from "react";
import "./imageslider.css";
import mip from './../../assets/img/microbit-mip.jpg';
import pixel from "./../../assets/img/pixel.jpg";
import mind from "./../../assets/img/robot-mind.jpg";
import scratch from "./../../assets/img/scratch.jpg";

const imageArray = [
  { img: mip },
  { img: pixel },
  { img: mind },
  { img: scratch }
];

const ImageSlider = () => {
  // currentSlide om de marginLeft te bepalen
  const [currentSlide, setCurrentSlide] = useState(2);
  // const autoPlay = true;
  const autoPlayTime = 4000;

  // bij elke wisseling van de currentSlide loopt ie over imageArray en krijg de index 0 de marge van de `-${currentSlide * 100}%`
  useEffect(() => {
    const timer = setTimeout(() => {
      const newSlideIndex =
        currentSlide >= imageArray.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlideIndex);
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="imageslider">
      {imageArray.map((image, index) => {
        return (
          <div
            key={index}
            className="imageslide"
            style={{
              backgroundImage: `url(${image.img})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
