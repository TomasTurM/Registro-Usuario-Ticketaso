Cypress.Commands.add('fill_form', (data) => {
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
    // Mail
    cy.get('[data-cy="input-email"]').type('pepe@papo.com')
    // Confirmacion Mail
    cy.get('[data-cy="input-confirmar-email"]').type('pepe@papo.com')
    // Contraseña
    cy.get('[data-cy="input-password"]').type('Pepe-1234')
    // Confirmacion Contraseña
    cy.get('[data-cy="input-repetir-password"]').type('Pepe-1234')
})