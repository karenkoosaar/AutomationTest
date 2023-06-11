import cartPage from '../objects/cartPage.js';
import inventoryPage from '../objects/inventoryPage.js';
const cart = new cartPage();
const inv = new inventoryPage();

//Goes to the Checkout part 1 page via the Checkout button and asserts the landing URL
Cypress.Commands.add('goToCheckout', function() {
    cart.btnCheckout().click();
    cy.url().should('include', 'checkout');
});

//Verify that item that was added from inventory is the same in Cart/Checkout via itemName
Cypress.Commands.add('verifyItem', function(inventoryItem) {
    var itemName = inventoryItem().Name;
    cy.log('Verifying item named ' + itemName);
    inv.inventoryItemName().contains(itemName);
});