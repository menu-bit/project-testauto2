describe('Addint produt to cart Test', function() {

    let token: string

    this.beforeEach(() => {
        cy.loginAndSaveToken().then((t) => {
            token = t
        })
    })

    it('Ajouter un produit disponible au panier', () => {    
        cy.request({

            method:'PUT',
            url:'http://localhost:8081/orders/add',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            body: {
                'product': 10,
                'quantity': 1
            }

            }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log('JSON.stringify(response.body)')
        });
    })
    
});