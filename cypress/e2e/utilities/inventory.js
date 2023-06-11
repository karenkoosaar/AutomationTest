const dayjs = require('dayjs');
import inventoryPage from '../objects/inventoryPage.js';
const inv = new inventoryPage();

//Asserts the page header
Cypress.Commands.add('assertHeader', function(data) {
    inv.pageHeader().within(() => {
        inv.btnMenu().should('exist');
        inv.headerLabel().should('exist').length > 1;
        inv.iconShoppingCart().should('exist');
    });
});

//Asserts the page footer
Cypress.Commands.add('assertFooter', function(data) {
    inv.pageFooter().within(() => {
        inv.socialTwitter().should('exist').contains('Twitter');
        inv.socialFB().should('exist').contains('Facebook');
        inv.socialLinkedIn().should('exist').contains('LinkedIn');
        inv.copyrightText().contains(dayjs().format('YYYY'));
    }); 
});


//Sorts products depending on input from input.data file and asserts the selection via active option
Cypress.Commands.add('sortOn', function(data) {
    inv.sortContainer().select(data.value);
    inv.sortContainerActiveOption().contains(data.name);
});

//Finds the last item in Inventory, saves its name into a variable, puts the item in Cart and returns the wrapped object
Cypress.Commands.add('addLastItemToCart', function() {
        inv.inventoryItem().last().then((inventoryItem) => {
            var itemName = inventoryItem.find('[class="inventory_item_name"]').text();
            cy.log(itemName);
            inventoryItem.find('[class="btn btn_primary btn_small btn_inventory"]').click();
            return cy.wrap({ Name : itemName }).as("lastItemInInventory");
        });
    }); 


//Finds the item by position in Inventory, saves its name into a variable, puts the item in Cart and returns the wrapped object
Cypress.Commands.add('addItemToCartByPosition', function(position) {
    inv.inventoryItem().eq(position).then((inventoryItem) => {
        var itemName = inventoryItem.find('[class="inventory_item_name"]').text();
        cy.log(itemName);
        inventoryItem.find('[class="btn btn_primary btn_small btn_inventory"]').click();
        return cy.wrap({ Name : itemName }).as("itemByPositionInInventory");
    });
}); 

//User navigates to the Cart page and asserts the URL
Cypress.Commands.add('goToCart', function() {
    inv.iconShoppingCart().click();
    cy.url().should('include', 'cart');
});

//User resets the App State, reloads the page and asserts that nothing is in Cart
Cypress.Commands.add('resetAppState', function() {
    inv.btnMenu().click();
    inv.resetAppState().click();
    cy.reload(true);
    inv.cartCount().should('not.exist');
})

//User removes item from cart
Cypress.Commands.add('removeItemFromCart', function() {
    inv.cartCount().should('exist');
    inv.btnRemoveFromCart().click();
    inv.cartCount().should('not.exist');
});

//User logs out
Cypress.Commands.add('logOut', function() {
    inv.btnMenu().click();
    inv.logOut().click();
    cy.url().should('equal','https://www.saucedemo.com/')
});
