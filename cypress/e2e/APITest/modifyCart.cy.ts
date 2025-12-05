describe('API tests', () => {
    let token: string; // token will be set in beforeEach
    let body: any;
    before(() => {
        cy.loginAndSaveToken().then((t) => {
            token = t;
        });
    })

    // 1️Get token before each test
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/orders',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`

            },
        }).then((response) => {
            expect(response.status).to.equal(200)
            body = response.body
        });
    });

    it('Change quantity in the cart', () => {

        cy.request({
            method: 'PUT',
            url: `http://localhost:8081/orders/${body.orderLines[0].id}/change-quantity`,
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            body: { "quantity": 5, "product": 10 },
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body))
        });
    })

    it('Delete a product in the cart', () => {
        cy.request({
            method: 'DELETE',
            url: `http://localhost:8081/orders/${body.orderLines[1].id}/delete`,
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`

            }
            //body: { "quantity": 1, "product": 10 },
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body))
        });
    })
})