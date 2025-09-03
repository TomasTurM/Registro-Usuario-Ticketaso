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

  it('Usuario menor a 18 años', () => {
    cy.fixture('form_data').then((data) => {
      // Cambiar año de nacimiento a una fecha no valida (menor de 18 años)
      data.fecha.anio = '2010'
      // Cambiamos datos para crear nuevo usuario
      data.email = 'menor18@papo3.com'
      data.confirmar_email = 'menor18@papo3.com'

      cy.fill_form(data)
    })

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()
    
    // comprobar si salto error
    cy.get('[data-cy="error-message"]').should('be.visible')
  })

  it('Registro con confirmacion de mail erronea', () => {
    cy.fixture('form_data').then((data) => {
      // Cambiamos datos para crear nuevo usuario
      data.email = 'mailcorrecto@papo.com'
      data.confirmar_email = 'mailincorrecto@papo.com'

      cy.fill_form(data)
    })

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()
    
    // comprobar si salto error
    cy.contains('Los correos electrónicos no coinciden')
  })

  it('Registro con confirmacion de contraseña erronea', () => {
    cy.fixture('form_data').then((data) => {
      // Cambiamos datos para crear nuevo usuario
      data.email = 'pepe10@papo.com'
      data.confirmar_email = 'pepe10@papo.com'
      data.contrasenia = 'Bien-1234'
      data.confirmacion_contrasenia = 'Mal-1234'

      cy.fill_form(data)
    })

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()
    
    // comprobar si salto error
    cy.contains('Las contraseñas no coinciden')
  })

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
      // Cambiamos datos para crear nuevo usuario
      data.email = 'peper@papo.com'
      data.confirmar_email = 'peper@papo.com'

      cy.fill_form(data)
    })

    // boton registrarse
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled')
    cy.get('[data-cy="btn-registrarse"]').click()

    cy.wait(2000)
    cy.url().should('include', 'auth/login')
  })
})

