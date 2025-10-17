// portability_test.cy.js
/// <reference types="cypress" />

describe('Pruebas de portabilidad de la aplicación web', () => {
  
  // URL de tu aplicación que vas a probar
  const APP_URL = 'http://localhost:3000'; 

  // Prueba en diferentes tamaños de pantalla (móvil, tablet y escritorio)
  it('Debe renderizar la interfaz de usuario correctamente en distintos tamaños de pantalla', () => {
    
    // Simula una vista de móvil
    cy.viewport('iphone-6');
    cy.visit(APP_URL);
    cy.contains('¡Bienvenido!').should('be.visible');
    cy.get('.mobile-menu-icon').should('be.visible');
    
    // Simula una vista de tablet
    cy.viewport('ipad-2');
    cy.visit(APP_URL);
    cy.contains('¡Bienvenido!').should('be.visible');
    cy.get('.mobile-menu-icon').should('not.be.visible');
    cy.get('.desktop-nav').should('be.visible');

    // Simula una vista de escritorio
    cy.viewport(1280, 720);
    cy.visit(APP_URL);
    cy.contains('¡Bienvenido!').should('be.visible');
    cy.get('.desktop-nav').should('be.visible');
  });

  // Prueba la funcionalidad de registro de usuario en diferentes navegadores
  // Nota: Cypress te permite ejecutar la misma prueba en diferentes navegadores
  // con un simple comando de terminal.
  it('El formulario de registro debe funcionar en diferentes navegadores', () => {
    cy.visit(`${APP_URL}/registro`);

    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('form').submit();

    // Verificación de éxito del registro
    cy.url().should('include', '/dashboard');
    cy.contains('Bienvenido, testuser').should('be.visible');
  });
});