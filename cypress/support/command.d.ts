declare namespace Cypress {
  interface Chainable {

    loginAndSaveToken(): Chainable<string>;
  }
}