//Additional Smoketests

describe('Smoketests', function () {

    beforeEach(function () {
        cy.fixture('input.data').then(function (testdata) {
            this.testdata = testdata
        });
    });

    it('tests a successful login, resetting the App State, navigation between pages, removing items from cart, logout functionality', function () {
        cy.log('User navigates to application login page')
        cy.visit('/')

        cy.log('User logs in as standard_user')
        const username = Cypress.env("standard_user_username")
        const password = Cypress.env("password")  
        cy.login(username, password, this.testdata.loginPage)

        cy.log('Assert the landing page URL, header and footer')
        cy.assertLandingPage(this.testdata.inventoryPage)

        cy.log('User adds last item to Cart, then resets the App State')
        cy.addLastItemToCart()
        cy.resetAppState()

        cy.log('User adds and removes the last item from Cart')
        cy.addLastItemToCart()
        cy.removeItemFromCart()
    });
   
});