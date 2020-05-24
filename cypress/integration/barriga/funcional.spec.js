// /// <references types="cypress" />

// describe('Should test at a functional level', () => {
//   before(() => {
//     cy.visit('https://barrigareact.wcaquino.me')
//   })
  
//   it('Login', function () {

//   cy.fixture('userBarriga').as('usuario').then(() => {
        
//     cy.get('.input-group').type(this.usuario.text)

//     cy.get(':nth-child(2) > .form-control').type(this.usuario.password)
//     cy.get('.btn').click()   
//     cy.get('.toast-message').should('contain', 'Bem vindo') 

//   })
// })

//  it('Should create an account', () => {
//     cy.get('[data-test=menu-settings]').click()
//     cy.get('[href="/contas"]').click()
//     cy.get('[data-test=nome]').type('teste')
//     cy.get('.btn').click()
//     cy.get('.toast-message').should('contain' , 'Conta inserida com sucesso')
//   })

//   it('Should update an account', () => {
//     cy.get('[data-test=menu-settings]').click()
//     cy.get('[href="/contas"]').click()
//     cy.xpath('//table//td[contains(., "teste")]/..//i[@class="far fa-edit"]').click()
    
//     cy.get('[data-test=nome]')
//     .clear()
//     .type('Conta Alterada')
//     cy.get('.btn').click()
//     cy.get('.toast-message').should('contain' , 'Conta atualizada com sucesso')
    
//   })
// })

/// <references types="cypress" />
//

// Forma ensinada pelo professor do curso
import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a functional level', () => {
    before(() => {
      cy.login('aaaa@gmail.com' , '123')      
      cy.resetApp()
    })

  it('Should create an account', () => {
      cy.acessarMenuConta()
      cy.inserirConta('Conta de teste')
      cy.get(loc.MESSAGE).should('contain' , 'Conta inserida com sucesso')
  })

  it('Should update an account', () => {
      cy.acessarMenuConta()
      cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
      
      cy.get(loc.CONTAS.NOME)
      .clear()
      .type('Conta Alterada')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain' , 'Conta atualizada com sucesso')
  })

  it('Should not create an account with same name', () => {
      cy.acessarMenuConta()
      cy.inserirConta('Conta Alterada')
      cy.get(loc.MESSAGE).should('contain' , 'code 400')
  })
})



