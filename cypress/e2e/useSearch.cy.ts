describe("useSearch", () => {
  it("fetches user data correctly", () => {
    cy.visit("/");

    cy.intercept("GET", "https://api.github.com/users/*", {
        statusCode: 200,
      fixture: "user.json",
    }).as("getUser");

    cy.get('[data-testid="search-input"]').type("validusername");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="carduser"]').should("exist");
    cy.get('[data-testid="seerepositories"]').click();    
    cy.wait("@getUser");
  });

  it("handles error when user is not found", () => {
    cy.intercept("GET", "https://api.github.com/users/*", {
      statusCode: 404,
      body: { message: "User not found" },
    }).as("getUser");
  });

  it("handles fetch failure", () => {
    cy.intercept("GET", "https://api.github.com/users/*", {
      statusCode: 500,
      body: "Server Error",
    }).as("getUser");
  });
});
