import type me = require("../definition/me")


describe('API tests', () => {
    let token: string // forcing typescript to treat as a string to remove red underline on $token

    beforeEach(() => {
        cy.loginAndSaveToken().then((t) => {
            token = t
        })
    })

    it('Get user profile', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/me',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const responseBody: me.medto = response.body;
            cy.log(JSON.stringify(responseBody));
            expect(responseBody.email).to.equal('test2@test.fr');

        })
    })

    it('(Fiche du produit spécifique) Should GET detail of a products by ID', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/products/3',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
    })


    it('(Produit en rupture de stock) Product rupture in stock', () => {
        cy.request({

            method: 'PUT',
            url: 'http://localhost:8081/orders/add',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            body: { "quantity": 1, "product": 4 },

        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body))
        });
    })

    it('(Produit disponible au panier) Add available product in the cart', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:8081/orders/add',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: {
                product: 10,
                quantity: 1
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        });
    })

    it('(Liste des produits du panier) Should get items in the cart', () => {
        cy.loginAndSaveToken().then((token) => {
            cy.request({

                method: 'GET',
                url: 'http://localhost:8081/orders',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }

            }).then((response) => {
                expect(response.status).to.equal(200);
                cy.log(JSON.stringify(response.body));
            });
        })
    })


})