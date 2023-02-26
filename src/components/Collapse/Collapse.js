import React, { useState } from "react";
import arrow from "../../assets/Arrow.svg";
import "./Collapse.css"

function Collapse({ title, description, arrowClass = "arrow-collapse" }) {
    const [open, setIsOpen] = useState(false);

    return (
        <div className="collapse" >
            <div className="header-collapse" onClick={() => setIsOpen(!open)}>
                <div className="title-collapse">{title}</div>
                <span className={`${arrowClass} ${open && "open"}`}>
                    <img src={arrow} alt="Flèche qui ouvre le panneau" />
                </span>
            </div>
            {open && <div className="description-collapse">{description}</div>}
        </div>
    );
}

export default Collapse;

