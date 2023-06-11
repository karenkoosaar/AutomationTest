class inventoryPage {

    pageHeader() {
        return cy.get('[id="header_container"]');
    };

    headerLabel() {
        return cy.get('[class="header_label"]');
    };

    pageFooter() {
        return cy.get('[class="footer"]');
    };

    socialTwitter() {
        return cy.get('[class="social_twitter"]');
    };

    socialFB() {
        return cy.get('[class="social_facebook"]');
    };

    copyrightText() {
        return cy.get('[class="footer_copy"]')
    }

    socialLinkedIn() {
        return cy.get('[class="social_linkedin"]');
    };

    sortContainer() {
        return cy.get('[data-test="product_sort_container"]');
    };

    sortContainerActiveOption() {
        return cy.get('[class="active_option"]');
    };

    inventoryItem() {
        return cy.get('[class="inventory_item"]');
    };

    inventoryItemName() {
        return cy.get('[class="inventory_item_name"]');
    };

    btnAddToCart() {
        return cy.get('[class="btn btn_primary btn_small btn_inventory"]');
    };

    iconShoppingCart() {
        return cy.get('[class="shopping_cart_container"]');
    };

    cartCount() {
        return cy.get('[class="shopping_cart_badge"]');
    };

    btnMenu() {
        return cy.get('[id="react-burger-menu-btn"]');
    };

    resetAppState() {
        return cy.get('[id="reset_sidebar_link"]');
    };

    btnRemoveFromCart() {
        return cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]');
    };

    logOut() {
        return cy.get('[id="logout_sidebar_link"]');
    };
}

export default inventoryPage;