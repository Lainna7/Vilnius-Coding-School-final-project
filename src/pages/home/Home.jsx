import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "./home.css";

const Home = () => {
  return (
    <div className="container container-main container-md   ">
      <div className="row p-5  ">
        <div className="col-sm-6 ">
          <div className="card-body  d-flex flex-column justify-content-around align-items-start">
            <h1 className="card-title">Skaniausi tortai pagal užsakymą</h1>
            <p className="card-text">
              Pas mane rasite visų mėgstamiausių skonių bei bet kuriai progai
              tinkantį tortą. Rinkitės!
            </p>
            <a href="/meniu" className="btn btn-lg btn-light" role="button">
              Rinktis tortą
            </a>
          </div>
        </div>
        <div className="col-sm-6  ">
          <a target="_blank" href="./images/didelis-tortas.jpg">
            <img
              src="./images/didelis-tortas.jpg"
              className="mx-auto d-block img-fluid"
              title="Tortas su makarūnsais"
              alt="didelis-tortas"
            />
          </a>
        </div>
      </div>
      <div className="container container-md py-5 mt-5">
        <h4> Savaitės hitai</h4>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
