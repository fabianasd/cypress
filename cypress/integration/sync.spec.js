/// >references types="cypress" />

describe('Esperas...', () => {
  before(() => {
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')
  })
//executa antes de cada um dos testes e permite 'limpar' a tela
  beforeEach(() => {
    cy.reload()
  })
  it('Deve aguardar elemento estar disponivel', () => {
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('not.exist')
    cy.get('#novoCampo').should('exist')
    cy.get('#novoCampo').type('funciona')
  })
  it('Deve fazer retrys', () => {
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('not.exist')
    cy.get('#novoCampo')
    .should('exist')
    .type('funciona')
  })

  it('Uso do find', () => {
    cy.get('#buttonListDOM').click()
    cy.get('#lista li')
    .find('span')
    .should('contain', 'Item 1')
    cy.get('#lista li span')
    .should('contain', 'Item 2')
  })

  it('Uso do timeout', () => {
   // cy.get('#buttonDelay').click()
   // cy.get('#novoCampo', { timeout: 1000 }).should('exist')
   
  // cy.get('#buttonListDOM').click()
   // evitar o uso do comando: cy.wait(5000)
   //cy.get('#lista li span', { timeout: 30000})
   //.should('contain', 'Item 2')
  
   cy.get('#buttonListDOM').click()
   // evitar o uso do comando: cy.wait(5000)
   //cy.get('#lista li span', { timeout: 3000})
   
   cy.get('#lista li span')
   .should('have.length', 1)
   cy.get('#lista li span')
   .should('have.length', 2)
  })
  
  it('Click retry', () => {
    cy.get('#buttonCount')
    .click()
    .should('have.value', '1')  
  })

  it("Should vs Then", () => {
    cy.get('#buttonListDOM').should($el => {
      expect($el).to.have.length(1)

   /*  cy.get('#buttonListDOM').then($el => {
      //console.log($el)
      expect($el).to.have.length(1)
      cy.get('#buttonList') */
  })
 })
})