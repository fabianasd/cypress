/// <reference types="cypress"/>

describe('Work with basic elements', () => {
 //executa uma vez antes de todos
  before(() => {
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')
  })
//executa antes de cada um dos testes e permite 'limpar' a tela
  beforeEach(() => {
    cy.reload()
  })

  it('Text', () => {
    cy.get('body').should('contain', 'Cuidado')
    //busca mais filtrada
    cy.get('span').should('contain', 'Cuidado')
    //busca filtrada pelo nome do campo
    cy.get('.facilAchar').should('contain', 'Cuidado')
    //busca filtrada pelo nome do campo
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

  })

  it('Links', () => {
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.get('#resultado').should('have.not.text', 'Voltou!')

    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

  }) 

  it('TextFields', () => {
    cy.get('#formNome').type('Cypress Test')
    cy.get('#formNome').should('have.value', 'Cypress Test')
  
    cy.get('#elementosForm\\:sugestoes')
    .type('textarea')
    .should('have.value', 'textarea')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
    .type('???')

    cy.get('[data-cy=dataSobrenome]')
    .type('Test12345{backspace}{backspace}')
    .should('have.value', 'Test123')

    cy.get('#elementosForm\\:sugestoes')
    .clear()
    .type('Erro{selectall}acerto',{ delay:100 })
    .should('have.value','acerto')
  })

  it('RadioButton', () => {
    cy.get('#formSexoFem')
    .click()
    .should('be.checked')

    cy.get('#formSexoMasc').should('not.be.checked')

    cy.get("[name='formSexo']").should('have.length', 2)
  }) 
  it('Checkbox', () => {
    cy.get('#formComidaPizza')
    .click()
    .should('be.checked')

    cy.get('[name=formComidaFavorita]')
    .click({multiple: true})
    cy.get('#formComidaPizza')
    .should('not.be.checked')
    cy.get('#formComidaVegetariana')
    .should('be.checked')
    
  })

  it('Combo', () => {
    cy.get('[data-test=dataEscolaridade]')
    .select('2o grau completo')
    .should('have.value', '2graucomp')

    cy.get('[data-test=dataEscolaridade]')
    .select('1graucomp')
    .should('have.value', '1graucomp')

//validar a quantiade de opcoes do combo
    cy.get('[data-test=dataEscolaridade] option')
    .should('have.length', 8)
    cy.get('[data-test=dataEscolaridade] option').then($arr => {
      const values = []
      $arr.each(function() {
        values.push(this.innerHTML)
      })
      expect(values).to.include.members(["Superior", "Mestrado"])
    })
    
  })

  it('Combo multiplo', () => {
    cy.get('[data-testid=dataEsportes]')
    .select(['natacao', 'Corrida', 'nada'])
    
    //validar opcoes selecionadas no combo multiplo de acordo com o tamanho

    cy.get('[data-testid=dataEsportes]').then($el => {
    expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
    expect($el.val()).to.have.length(3)  
  })

  cy.get('[data-testid=dataEsportes]').invoke('val')
  .should('eql', ['natacao', 'Corrida', 'nada'])


  })
  
})