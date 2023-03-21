import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="intro">
      <h1 data-aos="fade-up">
        Demeures de charme, appartements atypiques ou lofts, tous les biens
        d’exception et tout l’immobilier de prestige sont sur Enjoy Immobilier.
      </h1>
      <p data-aos="fade-up" className="text-gray-500">
        Spécialisé dans l’
        <span className="marker">immobilier de prestige et de luxe</span>, notre
        magazine présente les dernières annonces disponibles au travers de ses{" "}
        <span className="marker">versions digitales et papier</span>. Il est
        disponible gratuitement dans notre réseau de distribution sur Lyon et le
        Beaujolais, les deux Savoies et le Pays de Gex, et Bordeaux ainsi qu’en
        ligne. Que vous soyez à la recherche d’une belle demeure ou d’un
        appartement atypique, Enjoy Immobilier vous invite à découvrir tous les
        biens d’exception proposés par ses nombreuses agences immobilières
        partenaires.
      </p>
    </div>
  );
};

export default Intro;
