import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import About from "../components/About";
import Footer from "../components/Footer";
import Load from "../components/Load";
import { useState, useEffect } from "react";

const Home = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return load ? (
    <Load />
  ) : (
    <div>
      <Navigation />
      <Intro />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
