describe('Get Detail of a specific product', () => {
    let token: string // forcing typescript to treat as a string to remove red underline on $token

    beforeEach(() => {
        cy.loginAndSaveToken().then((t) => {
                token = t
        })
    })
    
    it('Should GET detail of a products by ID', () => {
        cy.request({
            method:'GET',
            url:'http://localhost:8081/products/3',
            headers: {
              'accept': 'application/json',
              'Authorization': `Bearer ${token}`
      }
      
    }).then((response) => {
        expect(response.status).to.equal(200)
        cy.log(JSON.stringify(response.body))
      })
    })
})