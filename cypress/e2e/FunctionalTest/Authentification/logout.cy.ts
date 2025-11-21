describe('User logout', () => {
    it('User logs out the Application', () => {
        cy.visit('http://localhost:4200/#/login')
        cy.get('[data-cy=login-input-username]')
        .type('test2@test.fr')
        cy.get('[data-cy=login-input-password]')
        .type('testtest')
        cy.get('[data-cy=login-submit]').click()
        cy.get('[data-cy=nav-link-logout]').click()
        cy.get('[data-cy=nav-link-login]').should('be.visible')
        .log('User successfylly Logged out')
    })
})