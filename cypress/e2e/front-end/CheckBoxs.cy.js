/// <reference types="cypress" />

describe('Validar los checkboxs', () => {

    it('TC-002 | Verificar, el checkbox este seleccionado', () => {
        cy.visit('https://getbootstrap.com/docs/5.3/forms/checks-radios/')
        cy.get('#flexCheckDefault').click({ force: true }).should('be.checked')
        cy.get('#flexCheckChecked').click({ force: true })
        cy.get('#flexCheckDisabled').should('be.disabled')

    })

    it('TC-003 | Verificar, el checkbox este deseleccionado', () => {
        cy.visit('https://getbootstrap.com/docs/5.3/forms/checks-radios/')
        cy.get('#flexCheckDisabled').should('be.disabled')

    })
})

