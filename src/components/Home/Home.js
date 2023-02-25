import React from "react";
import Banner from "../Banner/Banner";
import bannerAccueil from "../../assets/bannerAccueil.png";
import Card from "../Card/Card";
import Housing from "../../datas/housing.json";
import "./Home.css";

function Home() {
    return (
        <div>
            <Banner image={bannerAccueil} texte="Chez vous, partout et ailleurs" />
            <div className="background-card">
                <div className="container">
                    {Housing &&
                        Housing.map((housing) => {
                            return (
                                <div className="box" key={housing.id}>
                                    <Card image={housing.cover} title={housing.title} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
