import {
    Before,
    Given,
    When,
    Then,
    And
  } from "@badeball/cypress-cucumber-preprocessor";
  
  let stub;
  
  Before(() => {
    cy.log("Executing before step");
    stub = cy.stub();
  });
  
  Given("I access Login Portal Page", () => {
    cy.visit(Cypress.env('base_url'));
  });
  
  When("I enter a {word}, {word} and click login", (userName, password) => {
    cy.get('[name="username"]').type(userName);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
  });
  
  Then("I should be redirected to Dashboard page", () => {
    cy.get('[class="oxd-topbar-header-breadcrumb"]').should(
      "have.text",
      "Dashboard"
    );
  });
  
  Then(
    "I should be presented with the following message {word} {word}",
    (message, message2) => {
      cy.get(".oxd-alert-content-text").should(
        "have.text",
        "Invalid credentials"
      );
    }
  );