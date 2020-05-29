/// <reference types="cypress"/>

describe('Work with alerts', () => {
  //executa uma vez antes de todos
   beforeEach(() => {
     cy.visit('http://www.wcaquino.me/cypress/componentes.html')
   })
//testa todas as opcoes marcando um de cada vez e salvando ( foram 4 testes executados)
  const foods = ['carne', 'frango', 'pizza', 'vegetariano']
foods.forEach(food => {
  it(`Cadastro com comida variada ${food}`, function () {
    cy.fixture('userData').as('usuario').then(() => {
      cy.get('#formNome').type(this.usuario.nome,{ delay:100 })
      cy.get('#formSobrenome').type(this.usuario.sobrenome,{ delay:100 })
      cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()
      cy.get(`[name=formComidaFavorita][value=${food}]`).click()
      //cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
      cy.get('#formEscolaridade').select(this.usuario.escolaridade)
      cy.get('#formEsportes').select(this.usuario.esportes)
      cy.get('#formCadastrar').click()
      cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
  })
})
 //selecionou todos os combobox e retornou apenas um teste  
  it.only(`Deve selecionar todos usando o each`, function () {
    cy.fixture('userData').as('usuario').then(() => {
      cy.get('#formNome').type(this.usuario.nome,{ delay:100 })
      cy.get('#formSobrenome').type(this.usuario.sobrenome,{ delay:100 })
      cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()

      cy.get('[name=formComidaFavorita]').each($el => {
        // $el.click()
        if ($el.val() !== 'vegetariano')
            cy.wrap($el).click()
    })

      cy.get('#formEscolaridade').select(this.usuario.escolaridade)
      cy.get('#formEsportes').select(this.usuario.esportes)
      cy.get('#formCadastrar').click()
      cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

      //cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')    })
       
     })

  })
  
})