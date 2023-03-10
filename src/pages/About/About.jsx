import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import AboutBanner from "../../assets/AboutBanner.png";
import Banner from "../../components/Banner/Banner";
import "./About.css";

function About() {
  return (
    <div className="container-about">
      <div className="banner-about">
        <Banner image={AboutBanner} />
      </div>

      <div className="group-collapse">
        <Collapse
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          collapseClass="about-collapse"
          headerClass="about-header-collapse"
          titleClass="about-title-collapse"
        />
        <Collapse
          className="collapse-about"
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          collapseClass="about-collapse"
          headerClass="about-header-collapse"
          titleClass="about-title-collapse"
        />
        <Collapse
          className="collapse-about"
          title="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          collapseClass="about-collapse"
          headerClass="about-header-collapse"
          titleClass="about-title-collapse"
        />
        <Collapse
          className="collapse-about"
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          collapseClass="about-collapse"
          headerClass="about-header-collapse"
          titleClass="about-title-collapse"
        />
      </div>
    </div>
  );
}

export default About;
