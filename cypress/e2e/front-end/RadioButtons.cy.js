/// <reference types="cypress" />

describe('Validar radiobuttons de la pagina web', () => {

    it('TC-004 | Verificar, el uso de radiobutton seleccionado', () => {
        cy.visit('https://getbootstrap.com/docs/5.3/forms/checks-radios/')
        cy.get('#flexRadioDefault1').check({ force: true })
        cy.get('#flexRadioDefault2').should('not.be.checked')
        cy.get('#flexRadioDisabled').should('be.disabled')
    })

    it('TC-005 | Verificar, el uso de radiobutton deseleccionado', () => {
        cy.visit('https://getbootstrap.com/docs/5.3/forms/checks-radios/')
        cy.get('#flexRadioDisabled').should('be.disabled')
    })
})

