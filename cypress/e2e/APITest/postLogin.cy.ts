describe('API login Test', ()=> {

    it('Should login sucesfully', () => {
        cy.request({
            method:'POST',
            url:'http://localhost:8081/login',
            headers:{'Content-Type': 'application/json'},
            body:{username: 'test2@test.fr', password: 'testtest',}
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('token'); 
        })
    })

    it('Should Fail login', () => {
    cy.request({
            method: 'POST',
            url: 'http://localhost:8081/login',
            headers: { 'Content-Type': 'application/json' },
            body: { username: 'test1@test.fr', password: 'testtest' },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(401)
            cy.log(JSON.stringify(response.body));
        });
    });
})
