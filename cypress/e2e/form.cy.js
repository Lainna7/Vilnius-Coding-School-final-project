///<reference types="Cypress"/>

import { Button } from "react-bootstrap";

describe("testuojam užsakymo psl formą", () => {
  beforeEach(
    () => {
      cy.visit("http://localhost:3000/orders");
    },
    it("tikriname ar forma išsiunčiama(ar atsiranda alertas), kai visi laukai yra užpildyti (užpildyti laukus turi cypress", () => {
      cy.get("#name")
        .should("be.visible")
        .type("Laima")
        .should("have.value", "Laima");
      cy.get("#phone")
        .should("be.visible")
        .type("861545866")
        .should("have.value", "861545866");

      cy.get('button[type="submit"]').should("be.visible").click();
    })
  );
});
