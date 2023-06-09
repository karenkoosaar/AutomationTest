import cartPage from '../objects/cartPage.js';
const cart = new cartPage();

//Goes to the Checkout part 1 page via the Checkout button and asserts the landing URL
Cypress.Commands.add('goToCheckout', function(data) {
    cart.btnCheckout().click()
    cy.url().should('equal', data.url)
});