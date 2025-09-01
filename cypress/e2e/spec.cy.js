describe('Test Cases Pagina Registro', {testIsolation: false},  () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Registro sin poner datos', () => {
    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()

    // comprobar si salto error
    cy.get('[data-slot="error-message"').should('be.visible')
  })

  it('Usuario mayor a 18 años', () => {})

  it('Registro con confirmacion de mail erronea', () => {})

  it('Registro con confirmacion de contraseña erronea', () => {})

  it('Usuario existente', () => {
    // insertamos data en el formulario
    cy.fixture('form_data').then((data) => {
      cy.fill_form(data)
    })

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()

    // comprobar si salto error
    cy.contains('Ya existe un usuario registrado con ese correo electrónico')
  })

  it('Happy Path', () => {
    // insertamos data en el formulario
    cy.fixture('form_data').then((data) => {
      cy.fill_form(data)
    })

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()

    // comprobar si salto error
    cy.get('[data-cy="error-message"]').should('not.be.visible')
  })
})

