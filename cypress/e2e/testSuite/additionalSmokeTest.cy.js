//Additional Smoketests

describe('Smoketests', function () {

    beforeEach(function () {
        cy.fixture('input.data').then(function (testdata) {
            this.testdata = testdata;
        });
    });

    it('tests a successful login, resetting the App State, removing items from Cart, logout functionality', function () {
        cy.log('User navigates to application login page');
        cy.visit('/');

        cy.log('User logs in as standard_user');
        const username = Cypress.env("standard_user_username");
        const password = Cypress.env("password");
        cy.login(username, password);

        cy.log('User adds last item to Cart, then resets the App State');
        cy.addLastItemToCart();
        cy.resetAppState();

        cy.log('User adds and removes the last item from Cart');
        cy.addLastItemToCart();
        cy.removeItemFromCart();

        cy.log('User logs out');
        cy.logOut();
    });
});