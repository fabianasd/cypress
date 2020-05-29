/// <reference types="cypress"/>

describe('Work with Popup', () => {
  it('Deve testar popup diretamente', () => {
    cy.visit('http://www.wcaquino.me/cypress/frame.html')
          cy.get('#otherButton').click()
          cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
          })
    })

    it('Deve verificar se o popup foi invocado', () => {
      cy.visit('http://www.wcaquino.me/cypress/componentes.html')

      cy.window().then(win => {
        cy.stub(win, 'open').as('winOpen')

      })
      cy.get('#buttonPopUp').click()
      cy.get('@winOpen').should('be.called')
      })

      describe('with links...', () => {
        beforeEach(() => {
          cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        })
        it('Check popup url', () => {
          cy.contains('Popup2')
          .should('have.prop', 'href')
          .and('equal', 'http://www.wcaquino.me/cypress/frame.html')
        })
        it('Should acess popup dinamically', () => {
          cy.contains('Popup2').then($a=> {
            const href = $a.prop('href')
            cy.visit(href)
            cy.get('#tfield').type('funciona')
          })
        })

        it('Should force link on same page', () => {
        cy.contains('Popup2')
          .invoke('removeAttr', 'target')
          .click()
        cy.get('#tfield').type('funciona')

        })
      })
})