/// <reference types="cypress" />

describe('Cypress basics', () => {
  it('Should visit a page and assert title', () => {
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')
 

    //buscando o titulo da pagina
   cy.title('buscando 1')
   .should('be.equal', 'Campo de Treinamento')
   cy.title('buscando 1.1')
   .should('contain', 'Campo')
   //.debug()


   cy.title('buscando 2')
   .should('be.equal', 'Campo de Treinamento')
   .and('contain', 'Campo')

   let syncTitle

   //imprime o titulo da pagina no console
   cy.title().then(title => {
     console.log(title)

     cy.get('#formNome').type(title)

     syncTitle = title

   })
  // escreveu o titulo no campo sobrenome
   cy.get('[data-cy=dataSobrenome]').then($el => {
     $el.val(syncTitle)
   })

   cy.get('#elementosForm\\:sugestoes').then($el => {
    cy.wrap($el).type(syncTitle)
  })
})

  it('Should find and interact with an element', () => {
  cy.visit('http://www.wcaquino.me/cypress/componentes.html')

  cy.get('#buttonSimple')
  .click()
  .should('have.value', 'Obrigado!')
  })

})
