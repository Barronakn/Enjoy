import { NavLink } from "react-router-dom";
import videoBg from "../assets/ENJOY-HEADER-1.mp4";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = () => {
  //Effect au défilement
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  //Changement de l'affichage du background au défilement
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const navbarStyle = {
    backgroundColor: scrollPosition > 0 ? "white" : "transparent",
  };

  const colorStyle = {
    color: scrollPosition > 0 ? "black" : "",
  };

  //Changement du logo au survol
  const [logo1, setLogo1] = useState("menu-white.svg");

  const handleEnterOne = (e) => {
    setLogo1("menu-svgwhite-com.svg");
  };

  const handleLeaveOne = (e) => {
    setLogo1("menu-white.svg");
  };

  const [logo2, setLogo2] = useState("menu-black.svg");

  const handleEnterTwo = (e) => {
    setLogo2("menu-svgblack-com.svg");
  };

  const handleLeaveTwo = (e) => {
    setLogo2("menu-black.svg");
  };

  //Affichage au click
  const [show, setShow] = useState(false);
  let body = document.querySelector("body");

  const handleClick = () => {
    setShow(true);
    body.style.overflowY = "hidden";
  };

  const handleEnter = () => {
    const sousLink = document.querySelector(".menu .left ul .souslink");
    sousLink.style.display = "block";
  };

  const handleLeave = () => {
    const sousLink = document.querySelector(".menu .left ul .souslink");
    setTimeout(function () {
      sousLink.style.display = "none";
    }, 10000);
  };

  //Reset logo
  const [reset, setReset] = useState("croix.svg");
  const handleEnterReset = (e) => {
    setReset("trait.svg");
  };

  const handleLeaveReset = (e) => {
    setReset("croix.svg");
  };

  return (
    <div className="main">
      <div className="overlay"></div>
      <video className="z-0" src={videoBg} autoPlay loop muted />
      {show ? (
        <div className="menu w-screen fixed h-screen top-0 z-50 flex">
          <div className="left flex w-full h-full bg-white overflow-x-hidden overflow-y-auto">
            <img
              onMouseEnter={handleEnterReset}
              onMouseLeave={handleLeaveReset}
              onClick={() => {
                setShow(false);
                body.style.overflowY = "scroll";
              }}
              className="w-10 cursor-pointer h-10"
              src={reset}
              alt=""
            />
            <ul>
              <li>
                <NavLink className="text-8xl" to="#">
                  Left1
                </NavLink>
              </li>
              <li>
                <NavLink
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  className="link text-8xl"
                  to="#"
                >
                  Left2
                </NavLink>
                <ul className="souslink h-full flex flex-col">
                  <li>
                    <NavLink to="#">SousLink1</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">SousLink2</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">SousLink3</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="text-8xl" to="#">
                  Left3
                </NavLink>
              </li>
              <li>
                <NavLink className="text-8xl" to="#">
                  Left4
                </NavLink>
              </li>
              <li>
                <NavLink className="text-8xl" to="#">
                  Left5
                </NavLink>
              </li>
              <li>
                <NavLink className="text-8xl" to="#">
                  Left6
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right w-full h-full bg-slate-300 overflow-x-hidden overflow-y-auto">
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
            <div className="boxRight my-10 w-64 bg-gray-600 h-80"></div>
          </div>
        </div>
      ) : null}
      <div
        style={navbarStyle}
        className="flex w-full justify-center items-center nav z-30 fixed top-0 pt-5"
      >
        <div className="navbar">
          <img
            onMouseEnter={() => {
              handleEnterOne();
              handleEnterTwo();
            }}
            onMouseLeave={() => {
              handleLeaveOne();
              handleLeaveTwo();
            }}
            onClick={handleClick}
            style={colorStyle}
            className="w-12 pointer h-12 text-white"
            src={scrollPosition > 0 ? logo2 : logo1}
            alt=""
          />
        </div>
        <div className="logo h-full">
          <NavLink className="pointer" to="/">
            <img
              className="w-28 h-20"
              src={scrollPosition > 0 ? "logo-pink.svg" : "logo-white.svg"}
              alt=""
            />
          </NavLink>
        </div>
        <div className="annonce">
          <NavLink style={colorStyle} to="#">
            Accéder aux annonces
          </NavLink>
        </div>
      </div>
      <div data-aos="fade-up" className="welcome text-white">
        <h1>Immobilier de prestige et de luxe</h1>
      </div>
    </div>
  );
};

export default Navigation;
