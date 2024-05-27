describe("useRepository", () => {
    it("fetches repository data correctly", () => {
      cy.visit("/");
  
      cy.intercept("GET", "https://api.github.com/users/*/repos", {
        statusCode: 200,
        fixture: "repositories.json",
      }).as("getRepositories");
    });

    it("handles error when user is not found", () => {
        cy.intercept("GET", "https://api.github.com/users/*/repos", {
          statusCode: 404,
          body: { message: "User not found" },
        }).as("getRepositories");
      });
  
    it("handles fetch failure", () => {
      cy.intercept("GET", "https://api.github.com/users/*/repos", {
        statusCode: 500,
        body: "Server Error",
      }).as("getRepositories");
    });
  });
  