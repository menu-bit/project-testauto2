describe('EcoBlissBath Smoke Tests', () => {
  it('HomePage loads', () => {
    cy.visit('http://localhost:4200/#/')
    cy.get('app-navbar').should('be.visible')
  })

  it('Login', () => {
    cy.visit('http://localhost:4200/#/login')
    cy.get('[data-cy=login-input-username]')
      .type('test2@test.fr')
    cy.get('[data-cy=login-input-password]')
      .type('testtest')
    cy.get('[data-cy=login-submit]').click()
  })

  it('Product page and add to basket', () => {
    cy.visit('http://localhost:4200/#/products')
    cy.visit('http://localhost:4200/#/products/1')
    cy.contains('Sentiments printaniers').click()
    cy.get('[data-cy=detail-product-add]').click()   
  })
})