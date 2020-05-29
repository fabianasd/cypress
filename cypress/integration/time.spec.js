/// <reference types="cypress"/>

describe('Work with alerts', () => {
  //executa uma vez antes de todos
   before(() => {
     cy.visit('http://www.wcaquino.me/cypress/componentes.html')
   })

it('Going back to the past', () => {
  // cy.get('#buttonNow').click()
  // cy.get('#resultado > span').should('contain', '22/05/2020') 

  // cy.clock()
  // cy.get('#buttonNow').click()
  // cy.get('#resultado > span').should('contain', '31/12/1969')

  //alterando para a data desejada (ignora a data do PC)
  const dt = new Date(2012, 3, 10, 15, 23, 50)
      cy.clock(dt.getTime())
      cy.get('#buttonNow').click()
      cy.get('#resultado > span').should('contain', '10/04/2012')
})

it.only('Goes to the future', () => {
  cy.get('#buttonTimePassed').click()
  cy.get('#resultado > span').should('contain', '15902')
  //maior ou igual => gt
  //cy.get('#resultado > span').invoke('text').then(parseFloat).should('be.gt', 1590279702885)

  cy.clock()
  cy.get('#buttonTimePassed').click()
  // menor ou igual a 0 => lte
  cy.get('#resultado > span').invoke('text').then(parseFloat).should('be.lte', 0)

  cy.wait(1000)
  cy.get('#buttonTimePassed').click()
  cy.get('#resultado > span').invoke('text').then(parseFloat).should('be.lte', 1000)

  cy.tick(5000)
  cy.get('#buttonTimePassed').click()
  cy.get('#resultado > span').invoke('text').then(parseFloat).should('be.gte', 5000)

  cy.tick(10000)
  cy.get('#buttonTimePassed').click()
  cy.get('#resultado > span').invoke('text').then(parseFloat).should('be.gte', 15000)


})
})