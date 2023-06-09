import loginPage from '../objects/loginPage.js';
const login = new loginPage();

//Login as standard_user and assert the landing page via URL
Cypress.Commands.add('login', function(username, password, data) {
    cy.url().should('equal', data.url)
    login.inputUsername().type(username)
    login.inputPassword().type(password)
    login.btnLogin().click()
});

//Assert that user gets a locked out error message
Cypress.Commands.add('assertUserLockedOut', function(data) {
    cy.url().should('equal', data.url)
    login.errorMessage().contains(data.errorMessageLockedOutText)
});

//Asserts that user gets an error message for incorrect password
Cypress.Commands.add('assertIncorrectPassword', function(data) {
    cy.url().should('equal', data.url)
    login.errorMessage().contains(data.errorMessageIncorrectPasswordText)
});