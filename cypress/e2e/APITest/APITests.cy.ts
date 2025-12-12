import type me = require("../definition/me")


describe('API tests', () => {
    let token: string // forcing typescript to treat as a string to remove red underline on $token
    let body: any; // variable for modify and delete cart items which contains key of the cart

    // 1Get token before each test
    beforeEach(() => {
        cy.loginAndSaveToken().then((t) => {
            token = t
        })
    })
    // Get current cart and put response in variable body to use later while test of modifying cart item and delete cart item 
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

    //Test to get user profile
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

    //Get detail of a specific product
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

    //adding rupture stock product
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

    //add product in the cart
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

    //List of products in the cart
    it('(Liste des produits du panier) Should get items in the cart', () => {
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

    //modify quqntity in the cart
    it('Change quantity in the cart', () => {

        cy.request({
            method: 'PUT',
            url: `http://localhost:8081/orders/${body.orderLines[0].id}/change-quantity`, //getting key of the cat item from orderlines (body = response.body)
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

    //delete a product in the cart
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

    // add reviews
    it('Ajouter un avis', () => {
        cy.request({
            method: 'Post',
            url: 'http://localhost:8081/reviews',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            body: {
                "title": "string",
                "comment": "MS good products",
                "rating": 5,
            },

        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body))
        });
    })

})