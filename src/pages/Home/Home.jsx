import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeBanner from "../../assets/HomeBanner.png";
import Card from "../../components/Card/Card";
import Housing from "../../datas/housing.json";
import "./Home.css";

function Home() {
  const texte = [
    "Chez vous,",
    <br key="break" className="break" />,
    " partout et ailleurs",
  ];

  return (
    <div>
      <div className="banner-home">
        <Banner image={HomeBanner} texte={texte} />
      </div>
      <div className="background-card">
        <div className="container">
          {Housing &&
            Housing.map((housing) => {
              return (
                <div className="box" key={housing.id}>
                  <Card
                    id={housing.id}
                    image={housing.cover}
                    title={housing.title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
