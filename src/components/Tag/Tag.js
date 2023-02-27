import React from "react";
import { useParams } from "react-router-dom";
import housing from "../../datas/housing.json";
import "./Tag.css"

function Tags() {
    const { id } = useParams();
    const housingSearch = housing.find((housing) => housing.id === id);

    return (
        <div >
            <ul className="tags">
                {housingSearch.tags.map((tag) => (
                    <li className="tag" key={tag}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;
