/// <reference types="cypress" />
describe ('Obtener texto desde la pagina de Amazon', () =>{

    it('TC-006 | Verificación del Texto Dinámico en la Página', () =>{
        cy.visit('https://www.amazon.com.mx/')
        cy.get('[for="twotabsearchtextbox"]').should('contain', 'Buscar Amazon.com.mx')


        })
    })
