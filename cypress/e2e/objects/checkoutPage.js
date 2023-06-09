class checkoutPage {

    inputFirstName() {
        return cy.get('[data-test="firstName"]')
    }

    inputLastName() {
        return cy.get('[data-test="lastName"]')
    }

    inputPostCode() {
        return cy.get('[data-test="postalCode"]')
    }

    btnContinue() {
        return cy.get('[data-test="continue"]')
    }

    btnFinish() {
        return cy.get('[data-test="finish"]')
    }

    orderCompleteHeader() {
        return cy.get('[class="complete-header"]')
    }

    orderCompleteText() {
        return cy.get('[class="complete-text"]')
    }
}

export default checkoutPage;