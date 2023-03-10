import React, { useState } from "react";
import "./Carousel.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

function Carousel(props) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(
      currentImage === props.images.length - 1 ? 0 : currentImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage(
      currentImage === 0 ? props.images.length - 1 : currentImage - 1
    );
  };

  const currentIndex = currentImage + 1;

  return (
    <div className="carousel">
      <img
        className="image-carousel"
        src={props.images[currentImage]}
        alt="Carousel"
      />
      <img
        className="left-arrow"
        src={leftArrow}
        alt="flèche gauche carousel"
        onClick={prevImage}
      />
      <img
        className="right-arrow"
        src={rightArrow}
        alt="flèche droite carousel"
        onClick={nextImage}
      />
      <div className="carousel-nav bottom">
        <span>
          {currentIndex}/{props.images.length}
        </span>
      </div>
    </div>
  );
}

export default Carousel;
