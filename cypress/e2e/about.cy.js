///<reference types="Cypress"/>

describe("testuojam about.psl", () => {
  beforeEach(
    () => {
      cy.visit("http://localhost:3000/about");
    },
    it("tikriname ar about puslapyje egzistuoja nuotraukos, kurios laikomos akordione", () => {
      cy.get("#zita").should("exist");
      cy.get("#darius").should("exist");
      cy.get("#benediktas").should("exist");
    })
  );
});
