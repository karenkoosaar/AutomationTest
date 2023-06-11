//End-to-end test for product purchase

describe('End-to-end test for product purchase', function () {

    beforeEach(function () {
        cy.fixture('input.data').then(function (testdata) {
            this.testdata = testdata;
        });
    });

    it('tests the end-to-end flow for product purchase', function() {
        cy.log('User navigates to application web page');
        cy.visit('/');

        cy.log('User logs in as standard_user');
        const username = Cypress.env("standard_user_username");
        const password = Cypress.env("password");
        cy.login(username, password);

        cy.log('Asserting the header and footer of the landing page');
        cy.assertHeader();
        cy.assertFooter();

        cy.log('User sorts the products on Price - from low to high')
        cy.sortOn(this.testdata.inventoryPage.sortOn.priceLowHigh);

        cy.log('User selects the last item from list and adds it to Cart')
        cy.addLastItemToCart()

        cy.log('User sorts the products on Name - from A to Z')
        cy.sortOn(this.testdata.inventoryPage.sortOn.nameAZ)

        cy.log('User selects item by position (2nd) from list and adds it to Cart')
        cy.addItemToCartByPosition(1)

        cy.log('User goes to the Cart page and asserts the URL')
        cy.goToCart()

        cy.log('User verifies that the items displayed in Cart are the ones they added from Inventory')
        cy.verifyItem(() => this.lastItemInInventory)
        cy.verifyItem(() => this.itemByPositionInInventory)

        cy.log('User goes to the checkout step 1 page and asserts the URL')
        cy.goToCheckout()

        cy.log('User fills out customer details')
        cy.inputCustomerData(this.testdata.checkoutPage)

        cy.log('User proceeds to the checkout step 2 page and asserts the URL')
        cy.continueCheckout()

        cy.log('User verifies that the items in checkout are the ones they added from inventory')
        cy.verifyItem(() => this.lastItemInInventory)
        cy.verifyItem(() => this.itemByPositionInInventory)

        cy.log('Finalize purchase and verfiy that it is successful')
        cy.finalizePurchase(this.testdata.checkoutPage)

        cy.log('User logs out')
        cy.logOut()
    });
});