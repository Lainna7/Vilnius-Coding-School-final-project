///<reference types="Cypress"/>

import { Button } from "react-bootstrap";

describe("testuojam užsakymo psl", () => {
  beforeEach(
    () => {
      cy.visit("http://localhost:3000/orders");
    },
    it("tikriname ar negalima išsiųsti tuščios formos", () => {
      //cy.get("#name").type("vardas").should("have.value", "vardas");
      cy.get("#form").submit().should("not.be.empty");
    })
  );
});
