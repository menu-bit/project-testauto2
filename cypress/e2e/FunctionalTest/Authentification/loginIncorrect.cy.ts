describe('Login with incorrect authentification', () => {
    it('Login with incorrect ID', () => {
        cy.visit('http://localhost:4200/#/login')
        cy.get('[data-cy=login-input-username]')
        .type('test3@test.fr')
        cy.get('[data-cy=login-input-password]')
        .type('testtest')
        cy.get('[data-cy=login-submit]').click()
        cy.get('[data-cy=login-errors]').should('be.visible')
        .log('Login Failed')
    })



  })

describe('Login with incorrect authentification', () => {

         it('Login with incorrect Password', () => {
        cy.visit('http://localhost:4200/#/login')
        cy.get('[data-cy=login-input-username]')
        .type('test2@test.fr')
        cy.get('[data-cy=login-input-password]')
        .type('test123')
        cy.get('[data-cy=login-submit]').click()
        cy.get('[data-cy=login-errors]').should('be.visible')
        .log('Login Failed')
    }) 

})
