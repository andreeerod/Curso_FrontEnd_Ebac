/// <reference types="cypress" />

describe('Agenda de contatos', () => {
  // Os dados ficam em um backend compartilhado: nomes únicos evitam colisões
  const id = Date.now()
  const novo = {
    nome: `Maria Teste ${id}`,
    email: 'maria.teste@ebac.com.br',
    telefone: '11999998888',
  }

  const preencher = ({ nome, email, telefone }) => {
    cy.get('input[placeholder="Nome"]').clear().type(nome)
    cy.get('input[placeholder="E-mail"]').clear().type(email)
    cy.get('input[placeholder="Telefone"]').clear().type(telefone)
  }

  const contato = (nome) => cy.contains('.contato', nome)

  beforeEach(() => {
    cy.visit('/')
    cy.get('.contato').should('have.length.at.least', 1)
  })

  it('deve incluir um novo contato', () => {
    preencher(novo)
    cy.get('button.adicionar').click()

    contato(novo.nome)
      .should('contain', novo.email)
      .and('contain', novo.telefone)

    // limpeza
    contato(novo.nome).find('button.delete').click()
    cy.contains('.contato', novo.nome).should('not.exist')
  })

  it('deve alterar um contato existente', () => {
    preencher(novo)
    cy.get('button.adicionar').click()
    contato(novo.nome).should('be.visible')

    contato(novo.nome).find('button.edit').click()
    cy.get('input[placeholder="Nome"]').should('have.value', novo.nome)

    const editado = {
      nome: `Maria Alterada ${id}`,
      email: 'maria.alterada@ebac.com.br',
      telefone: '11977776666',
    }
    preencher(editado)
    cy.get('button.alterar').click()

    contato(editado.nome)
      .should('contain', editado.email)
      .and('contain', editado.telefone)
    cy.contains('.contato', novo.nome).should('not.exist')

    // limpeza
    contato(editado.nome).find('button.delete').click()
    cy.contains('.contato', editado.nome).should('not.exist')
  })

  it('deve remover um contato', () => {
    preencher(novo)
    cy.get('button.adicionar').click()
    contato(novo.nome).should('be.visible')

    contato(novo.nome).find('button.delete').click()

    cy.contains('.contato', novo.nome).should('not.exist')
  })
})
