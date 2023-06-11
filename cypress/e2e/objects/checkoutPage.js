class checkoutPage {

    inputFirstName() {
        return cy.get('[data-test="firstName"]');
    };

    inputLastName() {
        return cy.get('[data-test="lastName"]');
    };

    inputPostCode() {
        return cy.get('[data-test="postalCode"]');
    };

    btnContinue() {
        return cy.get('[data-test="continue"]');
    };

    btnFinish() {
        return cy.get('[data-test="finish"]');
    };

    checkoutComplete() {
        return cy.get('[id="checkout_complete_container"]');
    };

    checkoutCompleteImg() {
        return cy.get('[class="pony_express"]');
    };

    checkoutCompleteHeader() {
        return cy.get('[class="complete-header"]');
    };

    checkoutCompleteText() {
        return cy.get('[class="complete-text"]');
    };
}

export default checkoutPage;