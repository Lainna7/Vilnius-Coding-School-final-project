import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbaras() {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./images/logotipas.jpg"
            alt="Zitos tortukai logotipas"
            className="logotipas d-inline-block align-top"
            title="Grįžti į pagrindinį puslapį"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-3">
            <Nav.Link href="/">Pagrindinis</Nav.Link>
            <Nav.Link href="/meniu"> Meniu</Nav.Link>
            <Nav.Link href="/about"> Apie mane</Nav.Link>
            <Nav.Link href="/gallery"> Galerija</Nav.Link>
            <Nav.Link href="/orders"> Užsisakyk</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaras;
