describe('EcoBlissBath Smoke Test', () => {

    it('Full user flow', function () {
        cy.visit('/')
        cy.get('[data-cy="nav-link-login"]').click();
        cy.get('[data-cy="login-input-username"]').click();
        cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
        cy.get('[data-cy="login-input-password"]').click();
        cy.get('[data-cy="login-input-password"]').type('testtest');
        cy.get('[data-cy="login-submit"] span').click();
        cy.get('div.text-header button').click();
        cy.get('img[alt="Poussière de lune"]').click();
        cy.get('article:nth-child(3) [data-cy="product-link"]').click();
        cy.get('[data-cy="detail-product-skin"]').click();
        cy.get('[data-cy="detail-product-aromas"]').click();
        cy.get('#product-content div:nth-child(5)').click();
        cy.get('[data-cy="detail-product-add"]').click();
        cy.get('app-root').click();
        cy.get('[data-cy="cart-input-lastname"]').clear();
        cy.get('[data-cy="cart-input-lastname"]').type('aaa');
        //   cy.get('[data-cy="cart-input-lastname"]').type(`<script>alert('bonjour')</script>'`);
        cy.get('[data-cy="cart-form"] section.cart-section').click();
        cy.get('[data-cy="cart-input-firstname"]').clear();
        cy.get('[data-cy="cart-input-firstname"]').type('aaa');
        cy.get('[data-cy="cart-input-address"]').click();
        cy.get('[data-cy="cart-input-address"]').type('13 aaa');
        cy.get('[data-cy="cart-input-zipcode"]').click();
        cy.get('[data-cy="cart-input-zipcode"]').type('34000');
        cy.get('[data-cy="cart-input-city"]').click();
        cy.get('[data-cy="cart-input-city"]').type('aaa');
        cy.get('[data-cy="cart-line-image"]').click();
        cy.get('[data-cy="cart-submit"]').click();
        cy.get('[data-cy="nav-link-logout"]').click();

    });

});





