import React from "react";
import Banner from "../Banner/Banner";
import bannerAccueil from "../../assets/bannerAccueil.png"

function Home() {
    return (
        <div>
            <Banner image={bannerAccueil} texte="Chez vous, partout et ailleurs" />
            <div className="container"></div>
        </div>
    )
}

export default Home