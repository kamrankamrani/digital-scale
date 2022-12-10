/// <reference types="cypress" />

Cypress.Commands.add("getByDataTest", (value) => {
  return cy.get(`[data-test=${value}]`);
});

export {};
