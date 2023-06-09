class cartPage {

    btnCheckout() {
        return cy.get('[data-test="checkout"]')
    }
}

export default cartPage;