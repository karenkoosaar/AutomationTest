import checkoutPage from '../objects/checkoutPage.js';
const check = new checkoutPage();

//Entering customer data and asserting the entered data
Cypress.Commands.add('inputCustomerData', function(data) {
    check.inputFirstName().type(data.customerFirstName)
     .should('have.value', data.customerFirstName);
    check.inputLastName().type(data.customerLastName)
     .should('have.value', data.customerLastName);
    check.inputPostCode().type(data.customerPostCode)
     .should('have.value', data.customerPostCode);
});

//Continuing to the Checkout step 2 and asserting the URL
Cypress.Commands.add('continueCheckout', function() {
    check.btnContinue().click();
    cy.url().should('include', 'checkout');
});

//Finishing the purchase and asserting that it was successful
Cypress.Commands.add('finalizePurchase', function(data) {
    check.btnFinish().click();
    cy.url().should('include', 'checkout');
    check.checkoutComplete().within(() => {
        check.checkoutCompleteImg().should('be.visible');
        check.checkoutCompleteHeader().contains(data.headerText)
         .should('be.visible');
        check.checkoutCompleteText().contains(data.completeText)
         .should('be.visible');
    });
});