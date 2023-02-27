import React from "react";
import { useParams, Navigate } from "react-router-dom";
import housing from "../../datas/housing.json";
import "./Housing.css";
import SmallCollapse from "../SmallCollapse/SmallCollapse";
import Tags from "../Tag/Tag";

function Housing() {
    const { id } = useParams();
    const housingSearch = housing.find((housing) => housing.id === id);

    if (!housingSearch) {
        return <Navigate to={`/*`} />;
    }

    return (
        <div>
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
