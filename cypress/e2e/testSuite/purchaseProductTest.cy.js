//End-to-end test for product purchase

describe('End-to-end test for product purchase', function () {

    beforeEach(function () {
        cy.fixture('input.data').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('tests the end-to-end flow for product purchase', function() {
        cy.log('User navigates to application login page')
        cy.visit('/')

        cy.log('User logs in as standard_user')
        const username = Cypress.env("standard_user_username")
        const password = Cypress.env("password")
        cy.login(username, password, this.testdata.loginPage)

        cy.log('Assert the landing page')
        cy.assertLandingPage(this.testdata.inventoryPage)

        cy.log('User sorts the products on Price - from low to high')
        cy.sortOn(this.testdata.inventoryPage.sortOn.priceLowHigh)
        
        cy.log('User adds the last product to the cart')
        cy.addLastItemToCart()

        cy.log('User sorts the products on Name - from A to Z')
        cy.sortOn(this.testdata.inventoryPage.sortOn.nameAZ)

        cy.log('User adds the top right product to cart')
        cy.addTopRightItemToCart()

        cy.log('User goes to the Cart page and asserts the landing page')
        cy.goToCart(this.testdata.cartPage)

        cy.log('Storing the item names from cart')
        cy.get('[class="inventory_item_name"]').eq(0).then(($name) => {
            const cartItem1Name = $name.text()    
        cy.get('[class="inventory_item_name"]').eq(1).then(($name) => {
            const cartItem2Name = $name.text()
        cy.log(cartItem1Name)
        cy.log(cartItem2Name)

        cy.log('User goes to the checkout step 1 page and asserts the landing page')
        cy.goToCheckout(this.testdata.checkoutStep1)

        cy.log('User fills out customer details')
        cy.inputCustomerData(this.testdata.checkoutStep1)

        cy.log('User proceeds to the checkout step 2 page and asserts the landing page')
        cy.goToCheckoutStep2(this.testdata.checkoutStep2)

        cy.log('User stores the items data from checkout and then verifies that the data is the same as on the Cart page')
        cy.get('[class="inventory_item_name"]').eq(0).then(($name) => {
            const checkoutItem1Name = $name.text()
            cy.log(checkoutItem1Name)
            expect(checkoutItem1Name).to.equal(cartItem1Name)
        });
        cy.get('[class="inventory_item_name"]').eq(1).then(($name) => {
            const checkoutItem2Name = $name.text()
            cy.log(checkoutItem2Name)
            expect(checkoutItem2Name).to.equal(cartItem2Name)
        });

        cy.log('Finalize purchase and verfiy that it is successful')
        cy.finalizePurchase(this.testdata.checkoutComplete)
    });
});
});
});