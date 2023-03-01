import React, { useState } from "react";
import "./Carousel.css";

function Carousel(props) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage(currentImage === props.images.length - 1 ? 0 : currentImage + 1);
    };

    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? props.images.length - 1 : currentImage - 1);
    };

    const currentIndex = currentImage + 1;

    return (
        <div className="carousel">
            <img className="image-carousel" src={props.images[currentImage]} alt="Carousel" />

            <div className="carousel-nav">
                <button onClick={prevImage}>{"<"}</button>
                <span>
                    {currentIndex}/{props.images.length}
                </span>
                <button onClick={nextImage}>{">"}</button>
            </div>
        </div>
    );
}

export default Carousel;
