import React, { useState } from "react";
import arrow from "../../assets/Arrow.svg";
import "./SmallCollapse.css";

function SmallCollapse({ title, description, arrowClass = "arrow-collapse" }) {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="small-collapse">
      <div className="small-header-collapse" onClick={() => setIsOpen(!open)}>
        <div className="small-title-collapse">{title}</div>
        <span className={`${arrowClass} ${open && "open"}`}>
          <img src={arrow} alt="Flèche qui ouvre le panneau" />
        </span>
      </div>
      {open && (
        <div className="small-description-collapse">
          {typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            Array.isArray(description) &&
            description.length > 0 && (
              <ul>
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default SmallCollapse;
