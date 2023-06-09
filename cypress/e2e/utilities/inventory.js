import inventoryPage from '../objects/inventoryPage.js';
const inv = new inventoryPage();

//Asserts the landing page via URL, page header and page footer
Cypress.Commands.add('assertLandingPage', function(data) {
    cy.url().should('equal', data.url)
    inv.pageHeader().contains(data.headerText)
    inv.pageFooter().contains(data.footerText)
});

//Sorts products depending on input from input.data file and asserts the selection via active option
Cypress.Commands.add('sortOn', function(data) {
    inv.sortContainer().select(data.value)
    inv.sortContainerActiveOption().contains(data.name)
});

//User adds the last item to the cart and asserts that item was added by verifying the cart count
Cypress.Commands.add('addLastItemToCart', function() {
    inv.cartCount().should('not.exist')
    inv.btnAddToCart().last().click()
    inv.cartCount().should('contain', '1')
}); 

//User adds the top right item to the cart and asserts that item was added by verifying the cart count
Cypress.Commands.add('addTopRightItemToCart', function() {
    inv.cartCount().should('contain', '1')
    inv.btnAddToCart().eq(1).click()
    inv.cartCount().should('contain', '2')
});

//User navigates to the cart page via the cart icon and asserts the landing URL
Cypress.Commands.add('goToCart', function(data) {
    inv.iconShoppingCart().click()
    cy.url().should('equal', data.url)
});

//User resets the App State
Cypress.Commands.add('resetAppState', function() {
    inv.btnMenu().click()
    inv.resetAppState().click()
    cy.reload(true)
    inv.cartCount().should('not.exist')
})

//User removes item from cart
Cypress.Commands.add('removeItemFromCart', function() {
    inv.cartCount().should('exist')
    inv.btnRemoveFromCart().click()
    inv.cartCount().should('not.exist')
});
