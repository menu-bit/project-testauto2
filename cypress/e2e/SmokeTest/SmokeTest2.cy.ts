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
  let token: string | null;
  before(() => {
    cy.loginAndSaveToken().then((t) => {
      token = t
    })
  })
  it('ne doit pas exécuter de script malveillant lors de l\'ajout au panier', () => {
    const xssPayload = "<script>alert('XSS')</script>";

    cy.request({
      method: 'PUT', // ou POST selon l’API
      url: 'http://localhost:8081/orders/add',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` // si nécessaire
      },
      failOnStatusCode: false,
      body: {
        product: 1, // un id produit valide
        quantity: 1,
        comment: xssPayload // supposons que ce champ existe et peut être vulnérable
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 400, 422]); // selon comportement API

      // Le script ne doit jamais apparaître en clair dans la réponse
      expect(JSON.stringify(response.body)).not.to.contain('<script>');
      expect(JSON.stringify(response.body)).not.to.contain('alert(\'XSS\')');
    });
  });


})