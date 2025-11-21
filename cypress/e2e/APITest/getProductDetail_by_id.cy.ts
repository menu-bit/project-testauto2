describe('Get Detail of a specific product', () => {
    it('Should GET detail of a products by ID', () => {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3NjMxMTk0NDMsImV4cCI6MTc2MzEyMzA0Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdDJAdGVzdC5mciJ9.Z84cLJ5SPGEMk6IXAl2Zp2d5-9wt1GsfxNcemAT4YVxPv9Jl-u5ZK3GDXu3sx-ZaLCKfQMxmQ2JerNaXqeQA-AHIJb7kyc1jHU5nGaM2CxHZVRCmVTnCQbCOBMH7mXk71ESUpICPGg9UtDAqNEtCRkGrBwxeIZ8PiX_lbX8wfT4mjlvKjgF8KcBT22Jr-2eBOgnKVGuAJb5dm-xaXAcy9n8TERB87XhVCz9BUgHWJ3fT22eM6yH0HDhoxcZZIiH4sJO2_yV0WlAkffPHo1DnSJ9a-ceerEfBqrisUFN9CftnMy9EEafk1YzD37-5oCeiBKtUq__i14U6iOlAURR2MQ'

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