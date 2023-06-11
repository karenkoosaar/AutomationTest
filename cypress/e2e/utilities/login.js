import loginPage from '../objects/loginPage.js';
const login = new loginPage();

//Assert URL and login as standard_user 
Cypress.Commands.add('login', function(username, password) {
    cy.url().should('equal', 'https://www.saucedemo.com/');
    login.inputUsername().type(username);
    login.inputPassword().type(password);
    login.btnLogin().click();
});

//Assert the URL and that user gets an error message
Cypress.Commands.add('assertFailedLogin', function() {
    cy.url().should('equal', 'https://www.saucedemo.com/');
    login.errorMessage().should('exist');
});