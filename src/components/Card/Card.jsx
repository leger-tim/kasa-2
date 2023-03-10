import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ id, image, title }) {
    return (
        <div className="card">
            <Link to={`/housing/${id}`}>
                <img className="img-card" src={image} alt="Avatar" />
                <div className="title">
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;
