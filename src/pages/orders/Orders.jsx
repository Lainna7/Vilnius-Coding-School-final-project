import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "../../components/alerts/Alert.jsx";

function Orders() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      Alert();
    }

    setValidated(true);
  };

  return (
    <div className="container container-main container-md">
      <div className="row p-5">
        <div className="col-sm-6">
          <img
            src="./images/tortu-grupe.jpg"
            className="mx-auto d-block img-fluid"
            title="Tortai Jūsų šventei"
            alt="tortu grupe"
          />
        </div>
        <div className="col-sm-6  ">
          <div className="card-body d-flex flex-column justify-content-around align-items-start">
            <h1 className="card-title text-wrap">Užsisakykite tortą</h1>
            <p className="card-text">
              Su visais individualiais pageidavimais kreipkitės tiesiogiai.
            </p>
            <p className="card-text">
              Užpildykite šią formą ir aš netrukus su Jumis susisieksiu ir
              aptarsime Jūsų pageidavimus bei norus dėl užsakymo. Taip pat
              prireikus patarsiu.
            </p>

            <Form
              id="form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control
                  required
                  type="name"
                  placeholder="Vardas"
                  style={{ color: "#80887d" }}
                  title="Įveskite savo vardą"
                  id="name"
                />
                <Form.Control.Feedback type="invalid">
                  Prašau įvesti savo vardą
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  required
                  type="text"
                  placeholder="Telefono numeris"
                  style={{ color: "#80887d" }}
                  title="Įveskite savo telefono numerį"
                  //defaultValue="+370"
                  id="phone"
                />
                <Form.Control.Feedback type="invalid">
                  Prašau įvesti telefono numerį
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="light" type="submit">
                Siųsti žinutę
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
