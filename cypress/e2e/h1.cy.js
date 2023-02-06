///<reference types="Cypress"/>

describe("testuojam pgr.psl", () => {
  beforeEach(
    () => {
      cy.visit("http://localhost:3000");
    },
    it("tikrinam ar pagr.psl.egzistuoja h1 elementas su tekstu Skaniausi tortai pagal užsakymą", () => {
      cy.get("h1").contains("Skaniausi tortai pagal užsakymą").should("exist");
    })
  );
});
