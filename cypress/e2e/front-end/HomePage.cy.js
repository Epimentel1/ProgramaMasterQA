describe('Navegar HomePage', () => {
    it('TC-001 Verificar la carga del HomePage', () => {
        cy.visit('https://www.amazon.com.mx/');
        cy.screenshot();
    })
})

