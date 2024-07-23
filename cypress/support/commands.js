import { eCommercePaths } from "../configs/xpaths/eCommercePaths";
import userData from "../fixtures/userData.json";

Cypress.Commands.add("login", () => {
  cy.visit("https://www.amazon.in/").wait(1000);
  cy.get(eCommercePaths.loginPage.loginsignInButton)
    .eq(0)
    .click({ force: true })
    .wait(3000);
  cy.get(eCommercePaths.loginPage.loginEmail).type(userData.username);
  cy.get(eCommercePaths.loginPage.continueButton)
    .click({ force: true })
    .wait(2000);
  cy.get(eCommercePaths.loginPage.loginPassword).type(userData.password);
  cy.get(eCommercePaths.loginPage.loginSubmit).click().wait(2000);
});

// Command to verify sign-in
Cypress.Commands.add("verifySignIn", (expectedText) => {
  cy.get(eCommercePaths.navBar.verifyAccountName).should(
    "contain",
    expectedText
  );
});

// command to search product by 3 categories
Cypress.Commands.add("searchAndAddToCart", (keyword) => {
  cy.get(eCommercePaths.search.searchInput).clear().type(keyword);
  cy.get(eCommercePaths.search.searchSubmit).click();
  cy.scrollTo(0, 500);
  cy.contains(eCommercePaths.search.addToCartButton).click();
  cy.contains(eCommercePaths.search.itemAddedConfirmation).should("be.visible");
});

// Command to go to the cart and verify the cart page
Cypress.Commands.add("goToCart", () => {
  cy.contains(eCommercePaths.addToCart.goToCartButton).click();
  cy.get("h1")
    .contains(eCommercePaths.addToCart.shoppingCartHeader)
    .should("be.visible");
});

// Command to proceed to checkout 
Cypress.Commands.add("proceedToCheckout", () => {
  cy.get(eCommercePaths.checkOut.proceedToCheckoutButton).click();
  cy.contains(eCommercePaths.checkOut.deliveryAddressHeader).should(
    "contain.text",
    "Select a delivery address"
  );
  cy.go("back");
  cy.go("back");
});

Cypress.Commands.add("deleteRightPanel", () => {
  cy.get(eCommercePaths.other.deleteProduct).each(($el) => {
    cy.wrap($el).click();
  });
});

Cypress.Commands.add("signOut", () => {
  cy.contains(eCommercePaths.navBar.hoverOnAccount, "Account & Lists").trigger(
    "mouseover"
  );
  cy.get(eCommercePaths.checkOut.signOutButton).click();
});
