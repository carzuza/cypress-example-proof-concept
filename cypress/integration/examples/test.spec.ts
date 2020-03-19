describe('prueba 1', () =>{
    it('verdad es verdad', () => {
        expect(true).to.equal(true);
    });
});

describe('acciones por web', () => {
    it('carga sitio web de libros', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout: 10000});
        cy.url().should('include', 'index.html');
    });

    it('se va a la categoria de viajes', () => {
        cy.get('a')
            .contains('Travel')
            .click()
    });

    it('debe mostrar el numero correcto de libros', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11)
    });

    it('debe hacer click en categoria de poesia', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
    });


    it('debe hacer click en Olio book detail', () => {
        cy.get('a')
            .contains('Olio')
            .click()
    });


    it('debe tener precio correcto', () => {
        cy.get('.price_color').contains('£23.88');
    });

});