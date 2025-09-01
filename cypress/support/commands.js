Cypress.Commands.add('fill_form', (data) => {
    cy.log(data.provincia)

    // Nombre
    cy.get('[data-cy="input-nombres"]').type(data.nombre)
    // Apellido
    cy.get('[data-cy="input-apellido"]').type(data.apellido)
    // Numero telefono
    cy.get('[data-cy="input-telefono"]').type(data.telefono)
    // DNI
    cy.get('[data-cy="input-dni"]').type(data.dni) // cambiar en cada test
    // Provincia
    cy.get('[data-cy="select-provincia"]').click()
    cy.contains(data.provincia).click() 
    // Localidad
    cy.get('[data-cy="select-localidad"]').click()
    cy.contains(data.localidad).click()       
    // Fecha nacimiento
    cy.contains('dd').type(data.fecha.dia)
    cy.contains('mm').type(data.fecha.mes)
    cy.contains('aaaa').type(data.fecha.anio)
    // Mail
    cy.get('[data-cy="input-email"]').type(data.email)
    // Confirmacion Mail
    cy.get('[data-cy="input-confirmar-email"]').type(data.email)
    // Contraseña
    cy.get('[data-cy="input-password"]').type(data.contrasenia)
    // Confirmacion Contraseña
    cy.get('[data-cy="input-repetir-password"]').type(data.contrasenia)
})