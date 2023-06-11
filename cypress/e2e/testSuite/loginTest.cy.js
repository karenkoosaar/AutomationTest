//Loginflow tests for a successful login, a failed login due to incorrect password and a failed login due to locked out user

describe('Loginflow tests', function () {

    beforeEach(function () {
        cy.fixture('input.data').then(function (testdata) {
            this.testdata = testdata;
        });
    });

    it('tests the successful Loginflow for standard_user', function () {
        cy.log('User navigates to application login page');
        cy.visit('/');

        cy.log('User logs in as standard_user');
        const username = Cypress.env("standard_user_username");
        const password = Cypress.env("password");
        cy.login(username, password);

        cy.log('Assert the landing page URL, header and footer');
        cy.assertHeader();
        cy.assertFooter();
    });

    it('tests the Loginflow for a standard_user with incorrect password', function() {
        cy.log('User navigates to application login page');
        cy.visit('/');

        cy.log('User tries to log in as standard_user with incorrect password');
        const username = Cypress.env("standard_user_username");
        const password = "password";
        cy.login(username, password);

        cy.log('User gets an error message')
        cy.assertFailedLogin();
    });

    it('tests the Loginflow for a locked_out_user', function() {
        cy.log('User navigates to application login page');
        cy.visit('/');

        cy.log('User tries to log in as locked_out_user');
        const username = Cypress.env("locked_out_user_username");
        const password = Cypress.env("password");
        cy.login(username, password);

        cy.log('User gets an error message');
        cy.assertFailedLogin();
    });
});