import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Politics() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ color: "inherit", textDecoration: "inherit", padding: 0 }}
        variant="link"
        onClick={handleShow}
      >
        Privatumo politika
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Privatumo politika</Modal.Title>
        </Modal.Header>
        <Modal.Body>Čia yra ilgas sąrašas su politika.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Uždaryti
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Susipažinau
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Politics;
