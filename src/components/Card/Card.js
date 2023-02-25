import React from "react";
import "./Card.css";

function Card({ image, title }) {
    return (
        <div className="card">
            <img className="img-card" src={image} alt="Avatar" />
            <div className="titre">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Card;
