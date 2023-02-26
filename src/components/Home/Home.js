import React from "react";
import Banner from "../Banner/Banner";
import HomeBanner from "../../assets/HomeBanner.png";
import Card from "../Card/Card";
import Housing from "../../datas/housing.json";
import "./Home.css";

function Home() {
    return (
        <div>
            <Banner image={HomeBanner} texte="Chez vous, partout et ailleurs" />
            <div className="background-card">
                <div className="container">
                    {Housing &&
                        Housing.map((housing) => {
                            return (
                                <div className="box" key={housing.id}>
                                    <Card id={housing.id} image={housing.cover} title={housing.title} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
