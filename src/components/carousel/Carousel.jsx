import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";

const Carousel = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      items="3"
      autoplay
      loop
      dots={false}
      smartSpeed="500"
      margin={10}
    >
      <div className="item">
        <img
          title="Šokoladinis gražuolis"
          src="./images/sokoladinis-grazuolis.jpg"
          className="img-responsive"
          alt="Šokoladinis gražuolis"
        />
        <h6 className="hits-title">Šokoladinis gražuolis</h6>
      </div>
      <div className="item">
        <img
          title="Jogurtinis gaivuolis"
          src="./images/t5.jpg"
          className="img-responsive"
          alt="hitas"
        />
        <h6 className="hits-title">Jogurtinis gaivuolis</h6>
      </div>
      <div className="item">
        <img
          title="Vaisinė tartaletė"
          src="./images/vaisine-tartalete.jpg"
          className="img-responsive"
          alt="hitas"
        />
        <h6 className="hits-title">Vaisinė tartaletė</h6>
      </div>
      <div className="item">
        <img
          title="Braškinė svajonė"
          src="./images/braskine-svajone.jpg"
          className="img-responsive"
          alt="hitas"
        />
        <h6 className="hits-title">Braškinė svajonė</h6>
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
