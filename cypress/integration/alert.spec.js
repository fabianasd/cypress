/// <references types="cypress"/>

describe('Work with alerts', () => {
  //executa uma vez antes de todos
   before(() => {
     cy.visit('http://www.wcaquino.me/cypress/componentes.html')
   })
 //executa antes de cada um dos testes e permite 'limpar' a tela
   beforeEach(() => {
     cy.reload()
   })

   it.only('Alert...', () => {
    // cy.get('#alert').click()
    // cy.on('window:alert', msg => {
    //   expect(msg).to.be.equal('Alert Simples')
    // })

    // o codigo acima foi reduzido para linha abaixo com a utilizacao do 'commands'
    cy.clickAlert('#alert', 'Alert Simples')
   })

   it('Alert com mock', () => {
    const stub = cy.stub().as('alerta')
    cy.on('window:alert', stub)
      cy.get('#alert').click().then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
      })

   })

   it('Confirm...', () => {
    cy.on('window:confirm', msg => {
      expect(msg).to.be.equal('Confirm Simples')
    })
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Confirmado')
    })
    cy.get('#confirm').click()
   })
   
   it('Deny', () => {
    cy.on('window:confirm', msg => {
      expect(msg).to.be.equal('Confirm Simples')
      return false
    })
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Negado')
    })
    cy.get('#confirm').click()
   })

   it('Prompt', () => {
    cy.window().then(win => {
    cy.stub(win, 'prompt').returns('42')
    })
    cy.on('window:confirm', msg => {
      expect(msg).to.be.equal('Era 42?')
    })
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal(':D')
    })
    cy.get('#prompt').click()
   })
   //meu teste
   it('Validando mensagens...', () => {
    const stub = cy.stub().as('alerta')
    cy.on('window:alert', stub)
    cy.get('#formCadastrar').click()
    .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
    
    cy.get('#formNome').type('Fabiana')
     cy.get('#formCadastrar').click()
     .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
    
     cy.get('[data-cy=dataSobrenome]').type('Petrovick')
     cy.get('#formCadastrar').click()
     .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

    cy.get('#formSexoFem').click()
    cy.get('#formCadastrar').click()

    cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado')

   })

  })
 