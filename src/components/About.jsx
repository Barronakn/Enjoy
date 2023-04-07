import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <h1
        data-aos="fade-up"
        className="link py-3 my-8 text-center text-gray-600"
      >
        <NavLink data-aos="fade-up" to="#">
          Qui sommes-nous ?
        </NavLink>
      </h1>

      <div className="section-1 pb-40 mt-32 flex justify-evenly text-4xl">
        <div className="left relative w-5/12 h-full">
          <img
            className="z-0"
            src="./PhotoInspiration-BenedicteDrummondCarolineSciammaLondon_4358_1.jpeg"
            alt=""
          />
        </div>
        <div className="right">
          <p data-aos="fade-up" className="right-text text-red-500">
            Un savant mélange de professionnalisme et de créativité, enrobé
            d’une attention de tous les instants portée à la relation client.
          </p>
          <div className="span text-red-500"></div>
          <p data-aos="fade-up" className="link text-center text-red-500">
            <NavLink to="#">Découvrez nos inspirations</NavLink>
          </p>
        </div>
      </div>

      <div className="section-2 px-10 relative">
        <div className="section-content-1 flex justify-around">
          <div className="left  text-left w-5/12">
            <h1 data-aos="fade-up" className="text-5xl py-6">
              Communiquez avec Enjoy
            </h1>
            <p data-aos="fade-up" className="font-sans text-md text-gray-500">
              Canal de diffusion incontournable, la presse immobilière est un
              <span className="marker">
                {" "}
                développeur d’image et de notoriété
              </span>{" "}
              dont on ne pourrait se passer. Avec le magazine Enjoy Immobilier,
              profitez d’un{" "}
              <span className="marker">
                support commercial et de communication reconnu, de qualité
              </span>{" "}
              pour faire rayonner votre agence immobilière et ses biens.
            </p>
          </div>
          <div className="right w-1/2 relative -top-24 right-0">
            <img src="./textpicture-2.png" alt="" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="section-content-2 text-left  flex justify-around"
        >
          <div className="left pb-32 w-5/12">
            <div className="lateral"></div>
            <h1 data-aos="fade-up" className="text-lg py-5">
              Publiez dans le magazine
            </h1>
            <p
              data-aos="fade-up"
              className="font-sans parag h-32 text-md text-gray-500"
            >
              Le magazine Enjoy Immobilier est un support de communication
              qualitatif et soigné, mis au service des annonceurs pour
              promouvoir leur agence immobilière et leurs biens d’exception.
              Nous proposons différents formats éditoriaux (visite privée,
              invité du mois…) et pages d’annonces immobilières afin de
              valoriser leur offre immobilière.
            </p>
            <p className="link py-4 text-left text-gray-500">
              <NavLink data-aos="fade-up" to="#">
                Ça m’intéresse !
              </NavLink>
            </p>
          </div>
          <div className="right pb-32 w-5/12">
            <div className="lateral"></div>
            <h1 data-aos="fade-up" className="text-lg py-5">
              Nos supports de communication
            </h1>
            <p
              data-aos="fade-up"
              className="font-sans h-32 parag text-md text-gray-500"
            >
              Enjoy Immobilier vous accompagne dans l’élaboration de vos pages
              de publicité (choix des visuels, mise en page…) et la réalisation
              de vos outils de communication (consumer magazines, flyers,
              plaquettes de programme, tous les types de communication print…).
            </p>
            <p className="link py-4 text-gray-500">
              <NavLink data-aos="fade-up" to="#">
                J’en profite !
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className="section-3 relative h-32"></div>

      <div className="section-4 bg-indigo-100	flex justify-around">
        <div className="left h-full w-1/3">
          <h1 data-aos="fade-up" className="text-sky-700 py-10	text-4xl">
            Nos agences partenaires
          </h1>
          <p data-aos="fade-up" className="font-sans text-md text-gray-500">
            Enjoy immobilier collabore avec un large réseau d’agences
            immobilières. Nous leur offrons{" "}
            <span className="marker">un accompagnement privilégié</span> pour{" "}
            <span className="marker">
              faire rayonner leurs biens d’exception et développer leur
              visibilité.
            </span>
          </p>
          <p data-aos="fade-up" className="link py-4 text-sky-700">
            <NavLink to="#">J’en profite !</NavLink>
          </p>
        </div>
        <div className="right relative -top-32  -bottom-32">
          <img className="img" src="./textpicture-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
