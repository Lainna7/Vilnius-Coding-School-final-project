import React from "react";
import { Accordion } from "react-bootstrap";

const About = () => {
  return (
    <div className="container container-main container-md py-3">
      <div className="row ">
        <h1>Kodėl galite manimi pasitikėti?</h1>
        <h4>Kaip vyksta torto užsakymo procesas:</h4>
        <br />

        <div list>
          <p>1. Torto užsakymo suderinimas telefonu su pirkėju</p>
          <div className="embed-responsive embed-responsive-16by9">
            <video
              width="300"
              height="150"
              controls="true"
              className="embed-responsive-item"
              title="Torto užsakymo priėmimas telefonu"
            >
              <source
                src="./images/production ID_4109929.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <br />
          <p>2. Pasiruošimas gamybai</p>
          <div className="embed-responsive embed-responsive-16by9">
            <video
              width="300"
              height="150"
              controls="true"
              preload="none"
              className="embed-responsive-item"
              poster="./images/pasiruosimas.jpg"
              title="Pasiruošimas visam gamybos procesui"
            >
              <source
                src="./images/production ID_4109926.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <br />
          <p>3. Torto kepimas</p>
          <div className="embed-responsive embed-responsive-16by9">
            <video
              width="300"
              height="150"
              controls="true"
              preload="none"
              className="embed-responsive-item"
              poster="./images/gamyba.jpg"
              title="Torto kepimas"
            >
              <source
                src="./images/production ID_4109932.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <br />
          <p>4. Torto puošimas pagal kliento pageidavimą</p>
          <div className="embed-responsive embed-responsive-16by9">
            <video
              width="300"
              height="150"
              controls="true"
              preload="none"
              className="embed-responsive-item"
              poster="./images/papuosimas.jpg"
              title="Torto puošimas"
            >
              <source
                src="./images/production ID_4109934.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <br />
          <p>5. Torto supakavimas ir paruošimas pristatymui/atsiėmimui</p>
          <img
            className="logistic"
            src="./images/supakuotas-tortas.jpg"
            alt="Supakuotas tortas"
            title="Finalas"
          />
        </div>
      </div>
      <br />

      <h4>
        Jūsų tortus kepa bene pati geriausia konditerė Kupiškio rajone. Žinoma
        tik su jos šeimynos pagalba.
      </h4>
      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Zita Švelnė</Accordion.Header>
          <Accordion.Body>
            <img
              src="./images/zita.jpg"
              className="rounded-circle img-fluid"
              alt="Zita"
              title="Zita"
              id="zita"
            />
            <br />
            Beveik 30 metų patirtis su saldžių patiekalų gamyba. Tortai - mano
            aistra nuo pat mokyklos baigimo. Dėl jų galiu atsikelti ir 4
            val.ryto!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Darius Švelnė</Accordion.Header>
          <Accordion.Body>
            <img
              src="./images/darius.jpg"
              className="rounded-circle img-fluid"
              alt="Darius"
              title="Darius"
              id="darius"
            />
            <br />
            Mano vyro rankose visa logistika. Tiek reikalingų produktų pirkimas,
            tiek jau pagamintų tortų pristatymas į namus (pagal kliento
            pageidavimą).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Benediktas Švelnė</Accordion.Header>
          <Accordion.Body>
            <img
              src="./images/benediktas.jpg"
              className="rounded-circle img-fluid"
              alt="Benediktas"
              title="Benediktas"
              id="benediktas"
            />
            <br />
            Mano 6 metų amžiaus pagrindinis (ne)padėjėjas. Tortukų testuotojas
            ir naujų skonių bandytojas. Lengvai atskiria juodą nuo pieniško
            šokolado. Itin gerai supranta maisto saugos reikalavimus, tad kai
            mama kepa tortukus - stengiasi į virtuvę be reikalo neužsukti.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default About;
