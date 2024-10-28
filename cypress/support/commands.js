/// <reference types="cypress" />
import loc from "./locators";
import locators from "./locators";

Cypress.Commands.add('register', () => {
    cy.visit('/');
    cy.get('.fa-lock').click();
    cy.url().should('eq', 'https://automationpratice.com.br/register');
});

Cypress.Commands.add('btnRegister', () => {
    cy.get(loc.form.register).click();
});

Cypress.Commands.add('emptyName', () => {
    cy.btnRegister();
    cy.contains('O campo nome deve ser prenchido').should('be.visible');
});

Cypress.Commands.add('emptyEmail', () => {
    cy.get(locators.form.name).type('Teste');
    cy.btnRegister();
    cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible');
});

Cypress.Commands.add('invalidEmail', () => {
    cy.get(locators.form.name).type('Teste');
    cy.get(locators.form.email).type('email invalido');
    cy.btnRegister();
    cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible');
});

Cypress.Commands.add('emptyPassword', () => {
    cy.get(locators.form.name).type('Teste');
    cy.get(locators.form.email).type('teste@email.com');
    cy.btnRegister();
    cy.contains('O campo senha deve ter pelo menos 6 dígitos').should('be.visible');
});

Cypress.Commands.add('invalidPassword', () => {
    cy.get(locators.form.name).type('Teste');
    cy.get(locators.form.email).type('teste@email.com');
    cy.get(locators.form.password).type('123');
    cy.btnRegister();
    cy.contains('O campo senha deve ter pelo menos 6 dígitos').should('be.visible');
});

Cypress.Commands.add('successfulRegistration', () => {
    cy.get(locators.form.name).type('Teste');
    cy.get(locators.form.email).type('teste@email.com');
    cy.get(locators.form.password).type('123456');
    cy.btnRegister();
    cy.contains('Cadastro realizado!').should('be.visible');
})

Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.get('.fa-user').click();
    cy.url().should('eq', 'https://automationpratice.com.br/login');

    cy.get(locators.form.name).type('teste@email.com');
    cy.get(locators.form.password).type('123456');
    cy.btnLogin();
    cy.contains('Login realizado').should('be.visible');
    cy.get('.swal2-confirm').click();
});

Cypress.Commands.add('btnLogin', () => {
    cy.get(loc.form.login).click();
});

