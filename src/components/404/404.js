import React from "react";
import { Link } from "react-router-dom";
import "./404.css"
function NotFound() {
    return (
        <div className="container">
            <h1 className="code">404</h1>
            <div className="message">Oups ! La page que vous demandez n'existe pas.</div>
            <div className="retour"><Link className="retour" to="/">Retourner sur la page d'accueil</Link></div>
        </div>
    )
}

export default NotFound