import React, { useState } from "react";
import arrow from "../../assets/Arrow.svg";
import "./Collapse.css";

function Collapse({
  title,
  description,
  arrowClass = "arrow-collapse",
  headerClass,
  titleClass,
  collapseClass,
}) {
  const [open, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${collapseClass}`}>
      <div
        className={`header-collapse ${headerClass}`}
        onClick={() => setIsOpen(!open)}
      >
        <div className={`title-collapse ${titleClass}`}>{title}</div>
        <span className={`${arrowClass} ${open && "open"}`}>
          <img src={arrow} alt="Flèche qui ouvre le panneau" />
        </span>
      </div>
      {open && (
        <div className="description-collapse">
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

export default Collapse;
