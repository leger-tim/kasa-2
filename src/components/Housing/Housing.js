import React from "react";
import { useParams, Navigate } from "react-router-dom";
import housing from "../../datas/housing.json";
import "./Housing.css";
import SmallCollapse from "../SmallCollapse/SmallCollapse";
import Tags from "../Tag/Tag";
import Carousel from "../Carousel/Carousel";

function Housing() {
    const { id } = useParams();
    const housingSearch = housing.find((housing) => housing.id === id);

    // changera avec errorElement, rechercher lancer une exception react, throw new Exception
    if (!housingSearch) {
        return <Navigate to={`/*`} />;
    }

    return (
        <div>
            <Carousel images={housingSearch.pictures} />
            <div className="container-housing">
                <h1>{housingSearch.title}</h1>
                <p>{housingSearch.location}</p>
                <p>{housingSearch.host.name}</p>
                <img src={housingSearch.host.picture} alt={housingSearch.host.name} />
            </div>
            <SmallCollapse title="Description" description={housingSearch.description} />
            <SmallCollapse title="Équipements" description={housingSearch.equipments} />
            <Tags />

        </div>
    );
}

export default Housing;
