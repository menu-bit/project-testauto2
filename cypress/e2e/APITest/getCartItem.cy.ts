describe('Get items in the cart', ()=> {
    let token

    beforeEach(() => {
        cy.loginAndSaveToken().then((t) => {
                token = t
        })
    })
    
    it('Should get items in the cart', () => {
        cy.loginAndSaveToken().then((token) => {
        cy.request({

            method:'GET',
            url:'http://localhost:8081/orders',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            }).then((response) => {
            expect(response.status).to.equal(200)
            //expect(response.body).to.have.property('items')
            //expect(response.body.items).to.be.an('array');           
            cy.log(JSON.stringify(response.body))
        });
        })


    })
})
