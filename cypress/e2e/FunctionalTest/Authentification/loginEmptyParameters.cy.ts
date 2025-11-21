describe('Login with empty parameters', () => {
    it('Login fails', () => {
        cy.visit('http://localhost:4200/#/login')
        cy.get('[data-cy=login-input-username]') 
        cy.get('[data-cy=login-input-password]')   
        cy.get('[data-cy=login-submit]').click()
        cy.get('[data-cy=login-errors]').should('be.visible')
        .log('Login unsuccessful')
    })
})
