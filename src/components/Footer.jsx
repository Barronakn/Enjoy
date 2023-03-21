import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer px-20 text-white pt-32">
      <div className="position flex">
        <div className="left w-1/2 pr-10">
          <h1 className="text-3xl">Ne manquez plus une actualité !</h1>
          <p className="text-gray-400 py-4">
            Inscrivez-vous à notre newsletter et plongez dans l'univers Enjoy !
          </p>
          <form action="">
            <input
              className="mail"
              type="email"
              name="mail"
              placeholder="votreadresse@mail.com"
              id=""
            />
            <input type="submit" className="text-gray-400 btn" value="OK" />
          </form>
          <div className="icon mt-8 flex">
            <NavLink to="#">
              <svg
                fill="#fff"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                </g>
              </svg>{" "}
            </NavLink>
            <NavLink className="pl-10" to="#">
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect x="0" fill="none" width="20" height="20"></rect>{" "}
                  <g>
                    {" "}
                    <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </NavLink>
            <NavLink className="pl-10" to="#">
              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
                  <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
                </g>
              </svg>
            </NavLink>
          </div>
        </div>

        <div className="right w-1/2 pl-20 py-16 flex font-bold flex-col">
          <NavLink className="py-2" to="#">Les annonces d’Enjoy</NavLink>
          <NavLink className="py-2" to="#">Communiquez avec Enjoy</NavLink>
          <NavLink className="py-2" to="#">Nos agences partenaires</NavLink>
          <NavLink className="py-2" to="#">Enjoy Immobilier</NavLink>
          <NavLink className="py-2" to="#">Contact</NavLink>
          <NavLink className="py-2" to="#">Mentions légales</NavLink>
        </div>
      </div>

      <div className="services uppercase text-sm py-4 text-center font-sans">
        <p>
          <span className="px-10">Nos services : </span>{" "}
          <NavLink className="px-10" to="#">
            Savoie
          </NavLink>{" "}
          |
          <NavLink className="px-10" to="#">
            Haute-Savoie
          </NavLink>{" "}
          |
          <NavLink className="px-10" to="#">
            Bordeaux
          </NavLink>{" "}
          |
          <NavLink className="px-10" to="#">
            Lyon
          </NavLink>{" "}
          |
          <NavLink className="px-10" to="#">
            Pays de Gex
          </NavLink>{" "}
          |
          <NavLink className="px-10" to="#">
            Beaujolais
          </NavLink>
        </p>
      </div>

      <div className="footer-bottom py-12 flex justify-around">
        <div className="logo h-full">
          <NavLink className="pointer" to="/">
            <img src={"./logo-white.svg"} alt="" />
          </NavLink>
        </div>
        <p>
          Vous souhaitez implanter Enjoy Immobilier dans votre région ?
          Découvrez la licence de marque Enjoy Immobilier !
        </p>
        <p className="link text-white">
          <NavLink to="">Ça m'intèresse !</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Footer;
