import React from "react";
import { useParams } from "react-router-dom";
import housing from "../../datas/housing.json";
import "./Tag.css";

function Tags() {
  const { id } = useParams();
  const housingSearch = housing.find((housing) => housing.id === id);

  return (
    <div>
      <div className="tags">
        {housingSearch.tags.map((tag) => (
          <div className="tag" key={tag}>
            <p className="tag-text">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tags;
