import React from "react";
import { useParams, Navigate } from "react-router-dom";
import housing from "../../datas/housing.json";
import "./Housing.css";
import Collapse from "../../components/Collapse/Collapse";
import Tags from "../../components/Tag/Tag";
import Carousel from "../../components/Carousel/Carousel";
import StarRating from "../../components/StarRating/StarRating";

function Housing() {
  const { id } = useParams();
  const housingSearch = housing.find((housing) => housing.id === id);

  // changera avec errorElement, rechercher lancer une exception react, throw new Exception
  if (!housingSearch) {
    return <Navigate to={`/*`} />;
  }

  return (
    <div className="container-housing">
      <div className="carousel-housing">
        <Carousel images={housingSearch.pictures} />
      </div>
      <div className="elements-housing">
        <div className="title-section">
          <h1>{housingSearch.title}</h1>
          <p className="p-location">{housingSearch.location}</p>
          <div className="tags-housing">
            <Tags />
          </div>
        </div>

        <div className="host-stars">
          <div className="host-info">
            <div className="name-picture">
              <p>{housingSearch.host.name}</p>
              <img
                className="host-picture"
                src={housingSearch.host.picture}
                alt="Profile"
              />
            </div>
            <div className="stars">
              <StarRating rating={housingSearch.rating} />
            </div>
          </div>
        </div>
      </div>

      <div className="collapse-section">
        <div className="small-collapse">
          <Collapse
            title="Description"
            description={housingSearch.description}
            headerClass="housing-header-collapse"
            titleClass="housing-title-collapse"
          />
        </div>
        <div className="small-collapse">
          <Collapse
            // className="equipment"
            title="Équipements"
            description={housingSearch.equipments}
            headerClass="housing-header-collapse"
            titleClass="housing-title-collapse"
          />
        </div>
      </div>
    </div>
  );
}

export default Housing;
