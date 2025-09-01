describe('Test Cases Pagina Registro', {testIsolation: false},  () => {
  // Nota: el form permite usuarios menores de 18
  
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
    // Nombre
    cy.get('[data-cy="input-nombres"]').type('Pepe')
    // Apellido
    cy.get('[data-cy="input-apellido"]').type('Papo')
    // Numero telefono
    cy.get('[data-cy="input-telefono"]').type('3516765454')
    // DNI
    cy.get('[data-cy="input-dni"]').type('24353625') // cambiar en cada test
    // Provincia
    cy.get('[data-cy="select-provincia"]').click()
    cy.contains('Jujuy').click() 
    // Localidad
    cy.get('[data-cy="select-localidad"]').click()
    cy.contains('Abralaite').click()       
    // Fecha nacimiento
    cy.contains('dd').type('02')
    cy.contains('mm').type('02')
    cy.contains('aaaa').type('2002')
    // Nombre
    cy.get('[data-cy="input-email"]').type('pepe@papo.com')
    // Nombre
    cy.get('[data-cy="input-confirmar-email"]').type('pepe@papo.com')
    // Nombre
    cy.get('[data-cy="input-password"]').type('Pepe-1234')
    // Nombre
    cy.get('[data-cy="input-repetir-password"]').type('Pepe-1234')

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()

    // comprobar si salto error
    cy.get('[data-cy="error-message"').should('be.visible')
  })

  it('Happy Path', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')

    // Nombre
    cy.get('[data-cy="input-nombres"]').type('Pepe')
    // Apellido
    cy.get('[data-cy="input-apellido"]').type('Papo')
    // Numero telefono
    cy.get('[data-cy="input-telefono"]').type('3516765454')
    // DNI
    cy.get('[data-cy="input-dni"]').type('24353625') // cambiar en cada test
    // Provincia
    cy.get('[data-cy="select-provincia"]').click()
    cy.contains('Jujuy').click() 
    // Localidad
    cy.get('[data-cy="select-localidad"]').click()
    cy.contains('Abralaite').click()       
    // Fecha nacimiento
    cy.contains('dd').type('02')
    cy.contains('mm').type('02')
    cy.contains('aaaa').type('2002')
    // Nombre
    cy.get('[data-cy="input-email"]').type('pepe@papo.com')
    // Nombre
    cy.get('[data-cy="input-confirmar-email"]').type('pepe@papo.com')
    // Nombre
    cy.get('[data-cy="input-password"]').type('Pepe-1234')
    // Nombre
    cy.get('[data-cy="input-repetir-password"]').type('Pepe-1234')

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()

    // comprobar si salto error
    cy.get('[data-cy="error-message"').should('not.be.visible')
  })
})

