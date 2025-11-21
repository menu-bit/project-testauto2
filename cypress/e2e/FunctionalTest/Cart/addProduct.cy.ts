describe('User adds a product in the cart', () => {
    it('User Adds a product to cart', function() {
        cy.visit('http://localhost:4200/#/')
        cy.get('[data-cy="nav-link-login"]').click();
        cy.get('[data-cy="login-form"] label[for="username"]').click();
        cy.get('[data-cy="login-input-username"]').click();
        cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
        cy.get('[data-cy="login-input-password"]').click();
        cy.get('[data-cy="login-input-password"]').type('testtest');
        cy.get('[data-cy="login-submit"] span').click();
        cy.get('div.text-header button').click();
        cy.get('img[alt="Chuchotements d\'été"]').click();
        cy.get('article:nth-child(2) [data-cy="product-link"]').click();
        cy.get('#product-content').click();
        cy.get('[data-cy="detail-product-add"]').click();
        cy.get('img[alt="Chuchotements d\'été"]').should('be.visible')
        .log('Product successfully added');
    });
    
});









