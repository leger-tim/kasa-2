import React from "react";
import { useParams, Navigate } from "react-router-dom";
// import NotFound from "../404/404";
import housing from "../../datas/housing.json";
import "./Housing.css";

function Housing() {
    const { id } = useParams();
    const housingSearch = housing.find((housing) => housing.id === id);

    if (!housingSearch) {
        return <Navigate to={`/*`} />;
    }

    return (
        <div className="container-housing">
            <h1>{housing.title}</h1>
            <p>{housing.description}</p>
        </div>
    );
}

export default Housing;
