import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./kainos.css";

const Kainos = () => {
  return (
    <OwlCarousel
      className="owl-carousel owl-theme"
      items={2}
      autoplay={true}
      loop={true}
      nav={true}
      dots={false}
      smartSpeed="5000"
      margin={20}
      lazyLoad={true}
      responsiveClass={true}
    >
      <div className="item">
        <h6 className="hits-title">Šokoladinis</h6>
        <img
          title="Šokoladinis"
          src="./images/t12.jpg"
          className="img-responsive"
          alt="Šokoladinis"
        />
        <p className="hits-title"> Kaina nuo 14€/kg </p>
      </div>
      <div className="item">
        <h6 className="hits-title">Pavlova</h6>
        <img
          title="Pavlova"
          src="./images/t15Pavlova.jpg"
          className="img-responsive"
          alt="Pavlova"
          object-fit="fill"
        />
        <p className="hits-title"> Kaina nuo 10€/kg </p>
      </div>
      <div className="item">
        <h6 className="hits-title">Jogurtinis</h6>
        <img
          title="Jogurtinis"
          src="./images/jogurtinis-gaivuolis.jpg"
          className="img-responsive"
          alt="Jogurtinis"
          object-fit="fill"
        />
        <p className="hits-title"> Kaina nuo 9€/kg </p>
      </div>
      <div className="item">
        <h6 className="hits-title">Tartaletė</h6>
        <img
          title="Tartaletė"
          src="./images/vaisine-tartalete.jpg"
          className="img-responsive"
          alt="Tartaletė"
        />
        <p className="hits-title"> Kaina nuo 8€/kg </p>
      </div>
      <div className="item">
        <h6 className="hits-title">Red velvet</h6>
        <img
          title="Red velvet"
          src="./images/t18.jpg"
          className="img-responsive"
          alt="Red velvet"
        />
        <p className="hits-title"> Kaina nuo 12€/kg </p>
      </div>

      <div className="item">
        <h6 className="hits-title">Vestuvinis</h6>
        <img
          title="Vestuvinis"
          src="./images/t4.jpg"
          className="img-responsive"
          alt="Vestuvinis"
          object-fit="fill"
        />
        <p className="hits-title"> Kaina nuo 19€/kg </p>
      </div>
    </OwlCarousel>
  );
};

export default Kainos;
