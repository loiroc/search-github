describe("App", () => {
  it("should display a list of users when a valid search is performed", () => {
    cy.visit("/");
    cy.get('input[type="text"]').type("john");
    cy.get('button[type="submit"]').click();
    cy.get("#grid #grid-item").should("have.length.greaterThan", 0);
  });

  it("should display user details when a user is selected from the list", () => {
    cy.visit("/");
    cy.get('input[type="text"]').type("john");
    cy.get('button[type="submit"]').click();
    cy.get("#grid #grid-item:first").click();
    cy.get("#modal-user").should("have.text", "john");
  });

  it("should clear the search results when the reset button is clicked", () => {
    cy.visit("/");
    cy.get('input[type="text"]').type("john");
    cy.get('button[type="submit"]').click();
    cy.get('button[type="button"]').click();
    cy.get("#grid #grid-item").should("not.exist");
  });
});
