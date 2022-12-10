/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataTest(value: string): Chainable<Element>;
  }
}
