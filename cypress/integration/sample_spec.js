describe('form test', function () {
    it('Test my pizza form', function () {
       cy.visit("http://localhost:3000/pizza")
       cy.contains('name')
       cy.contains('checkbox').click()
    })
})