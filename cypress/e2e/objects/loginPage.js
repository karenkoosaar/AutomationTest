class loginPage {

    inputUsername() {
        return cy.get('[data-test="username"]')
    }

    inputPassword() {
        return cy.get('[data-test="password"]')
    }

    btnLogin() {
        return cy.get('[data-test="login-button"]')
    }

    errorMessage() {
        return cy.get('[data-test="error"]')
    }
}

export default loginPage;