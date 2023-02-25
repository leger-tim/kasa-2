import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./Navbar.css"

function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="Logo Kasa"></img>
                <ul className="liste">
                    <li><Link className="accueil" to="/">Accueil</Link></li>
                    <li><Link className="about" to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar