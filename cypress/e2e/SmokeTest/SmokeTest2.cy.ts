describe('EcoBlissBath Smoke Test', () => {

  // 1. Test : Présence des éléments de connexion
  it('Check login fields and button presence', () => {
    cy.visit('/');
    cy.get('[data-cy="nav-link-login"]').click();

    // Vérifie la présence des éléments
    cy.get('[data-cy="login-input-username"]').should('be.visible');
    cy.get('[data-cy="login-input-password"]').should('be.visible');
    cy.get('[data-cy="login-submit"]').should('be.visible');
  });

  // 2. Test :  Présence des boutons d’ajout au panier et du champ de disponibilité du produit
  it('Check add-to-cart button and availability field', () => {
    cy.visit('/');

    // Navigation vers un produit
    cy.get('[data-cy="nav-link-login"]').click();
    cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
    cy.get('[data-cy="login-input-password"]').type('testtest');
    cy.get('[data-cy="login-submit"]').click();

    // Accès produit
    cy.get('div.text-header button').click();
    cy.get('img[alt="Poussière de lune"]').click();
    cy.get('article:nth-child(3) [data-cy="product-link"]').click();
    cy.get('[data-cy="detail-product-skin"]').click();
    cy.get('[data-cy="detail-product-aromas"]').click();
    cy.get('#product-content div:nth-child(5)').click();

    // Vérifie presence de bouton d'ajout
    cy.get('[data-cy="detail-product-add"]').should('be.visible');
    cy.get('[data-cy="detail-product-add"]').click();

    // Vérifie le presence de stock du produit
    cy.get('[data-cy="detail-product-stock"]').should('be.visible');
  })

  // 3. Test : Faille XSS sur la route d’ajout au panier


})