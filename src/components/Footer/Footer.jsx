import React from "react";
import logo from "../../assets/logo-white.svg";
import "./Footer.css"
function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer