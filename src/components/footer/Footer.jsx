import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Rules from "../modal1/Modal1";
import Politics from "../modal2/Modal2";

const Footer = () => {
  return (
    <footer className="footer p-2 ">
      <div className="container p-2 ">
        <div className="row ">
          <div className="col-sm-3 logo">
            <ul className="list">
              <li>
                <img
                  src="./images/logotipas.jpg"
                  alt="Zitos tortukai logotipas"
                  title="Zitos tortukų logotipas"
                  className="logotipas d-inline-block align-top"
                />
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list">
              <li>
                <strong>Telefono numeris:</strong> +370 614 68366 <br />
              </li>
              <li>
                <strong>El. paštas: </strong>
                <a href="mailto:zitos@tortukai.lt" title="Parašyk el. laišką">
                  zitos@tortukai.lt
                </a>
              </li>
              <li>
                <strong>Adresas: </strong>
                <a
                  href="https://goo.gl/maps/DV9KdKc21KfvcH4m9"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Pažiūrėk žemėlapyje"
                >
                  Vėžionių g. 66, Aukštupėnai, Kupiškio raj.
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul className="list">
              <li>
                <Rules />
              </li>
              <li>
                <Politics />
              </li>
              <li>
                <a href="https://instagram.com" title="Panaršyk Instagrame">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com" title="Panaršyk Facebooke">
                  <FacebookIcon />
                </a>
                <a href="https://whatsapp.com" title="Susisiek per whatsappą">
                  <WhatsAppIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
