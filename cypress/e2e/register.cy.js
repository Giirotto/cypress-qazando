/// <reference types="cypress" />

describe('User register', () => {

    beforeEach(() => {
        cy.register();
    });

    it('Validates empty name field', () => {
        cy.emptyName();
    });

    it('Validates empty email field', () => {
        cy.emptyEmail();
    });

    it('Validates invalid email field', () => {
        cy.invalidEmail();
    });

    it('Validate empty password field', () => {
        cy.emptyPassword();
    });

    it('Validates invalid password field', () => {
        cy.invalidPassword();
    });

    it('Registration completed successfully', () => {
        cy.successfulRegistration();
    });
});






