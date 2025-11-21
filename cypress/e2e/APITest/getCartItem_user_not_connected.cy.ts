describe('GET /orders - accès sans authentification', () => {
    it('devrait renvoyer 401 si non connecté', () => {
        cy.request({
        method: 'GET',
        url: 'http://localhost:8081/orders',
        failOnStatusCode: false,
        }).its('status').should('equal', 401)
    })

/*
    it('devrait renvoyer 401 si non connecté', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/orders',
            failOnStatusCode: false, // prevents Cypress from failing automatically on 401
        }).then((response) => {
            expect(response.status).to.equal(401)
            cy.log(JSON.stringify(response.body))
        });
    });
*/


});
