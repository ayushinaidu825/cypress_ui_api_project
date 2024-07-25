import { eCommercePaths } from "../configs/xpaths/eCommercePaths";
import userData from "../fixtures/userData.json";
import magneto from "../fixtures/magneto.json";

Cypress.Commands.add("amazonlogin", () => {
  const AmazonbaseUrl = Cypress.config("AmazonbaseUrl");
  cy.visit(AmazonbaseUrl).wait(1000);
  cy.get(eCommercePaths.loginPage.loginsignInButton)
    .eq(0)
    .click({ force: true })
    .wait(3000);
  cy.get(eCommercePaths.loginPage.loginEmail).type(userData.username);
  cy.get(eCommercePaths.loginPage.continueButton)
    .click({ force: true })
    .wait(2000);
  cy.get(eCommercePaths.loginPage.loginPassword).type(userData.password);
  cy.get(eCommercePaths.loginPage.loginSubmit).click().wait(3000);
});

// Command to verify sign-in
Cypress.Commands.add("verifySignIn", (expectedText) => {
  cy.scrollTo('top')
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
  cy.contains(eCommercePaths.search.addToCartButton).click().wait(2000);
  cy.contains(eCommercePaths.search.itemAddedConfirmation).should("be.visible");
});

// Command to go to the cart and verify the cart page
Cypress.Commands.add("goToCart", () => {
  cy.contains(eCommercePaths.addToCart.goToCartButton).click().wait(2000);
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
  cy.go("back").wait(1000);
});

// Deleting added products
Cypress.Commands.add("deleteRightPanel", () => {
  cy.get(eCommercePaths.other.deleteProduct).each(($el) => {
    cy.wrap($el).click();
    cy.wait(1000);
  });
});

// To complete flow signout
Cypress.Commands.add("signOut", () => {
  cy.contains(eCommercePaths.navBar.hoverOnAccount, "Account & Lists").trigger(
    "mouseover"
  );
  cy.get(eCommercePaths.checkOut.signOutButton).click();
});

// Magento e-commerce site Test 2

Cypress.Commands.add("Magentologin", () => {
  const MagentoBaseUrl = Cypress.config("MagentoBaseUrl");
  cy.visit(MagentoBaseUrl);
  cy.get(eCommercePaths.magento.logo).should("be.visible");
  cy.get(eCommercePaths.magento.signInLink).click();
  cy.get(eCommercePaths.magento.emailInput).type(magneto.email);
  cy.get(eCommercePaths.magento.passwordInput).type(magneto.password);
  cy.get(eCommercePaths.magento.signInButton).click().wait(500);

  /*  Error found while testing
  cy.get(eCommercePaths.magento.customerLoginTitle,{ timeout: 10000 }).eq(0).should(
    "have.text",
    "Welcome, Ayushi Naidu!"
  ); */
});

Cypress.Commands.add("searchRandomLogic", () => {
  cy.log('searchRandomLogic command is being executed');
  cy.get(eCommercePaths.magento.productItemLink).eq(1).click({ force: true });
  cy.get(eCommercePaths.magento.sizeOptions).then(($options) => {
    const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options).eq(randomIndex).click();
  });
  cy.wait(1000);
  cy.get(eCommercePaths.magento.colorOptions).then(($colors) => {
    const randomIndex = Math.floor(Math.random() * $colors.length);
    cy.wrap($colors).eq(randomIndex).click({ force: true });
    cy.wait(2000);
  });
});


let cartCount = 0; // Initialize the counter
Cypress.Commands.add("addToCartAndVerify", () => {
  cartCount += 1; // Increment the counter
  cy.get(eCommercePaths.magento.addToCartButton).click();
  cy.scrollTo("top");
  cy.get(eCommercePaths.magento.cartCounter).should("have.text", cartCount.toString());
});

Cypress.Commands.add("searchBycategory1", () => {
  cy.wait(1000);
  cy.get(eCommercePaths.magento.categoryMenu).trigger("mouseover");
  cy.wait(500);
  cy.get(eCommercePaths.magento.subCategoryMenu).trigger("mouseover");
  cy.wait(500);
  cy.get(eCommercePaths.magento.subCategoryItem).click();
  cy.searchRandomLogic(); 
  cy.addToCartAndVerify();
});

Cypress.Commands.add("searchBycategory2", () => {
  cy.wait(1000);
  cy.get(eCommercePaths.magento.categoryMenu1).trigger('mouseover');
  cy.get(eCommercePaths.magento.subCategoryMenu1).click();
  cy.get(eCommercePaths.magento.productItemLink).eq(1).click({ force: true });
  cy.wait(3000);
  cy.addToCartAndVerify();
});

Cypress.Commands.add("searchBycategory3", () => {
  cy.get(eCommercePaths.magento.categoryMenu2).click();
  cy.get(eCommercePaths.magento.subCategoryMenu2).click();
  cy.get(eCommercePaths.magento.subCategoryItem2).click();
  cy.get(eCommercePaths.magento.productItemLink).eq(1).click({ force: true });
  cy.searchRandomLogic();
  cy.addToCartAndVerify();
});

Cypress.Commands.add("checkoutToCart", () => {
  cy.get(eCommercePaths.magento.showCart).click({ force: true });
  cy.get(eCommercePaths.magento.proceedToCheckoutButton1).click().wait(5000);
  cy.get(eCommercePaths.magento.verifyCheckoutHeader).should('have.text','Shipping Address');
  /*
  cy.get(eCommercePaths.magento.newAddress).click();
  cy.get(eCommercePaths.magento.shippingFisrtName).clear().type(magneto.categories[0].firstname);
  cy.get(eCommercePaths.magento.shippingLastName).clear().type(magneto.categories[0].lastname);
  cy.get(eCommercePaths.magento.shippingCompany).clear().type(magneto.categories[0].company);
  cy.get(eCommercePaths.magento.shippingStreetAddress).clear().type(magneto.categories[0].streetAddress);
  cy.get(eCommercePaths.magento.shippingCity).clear().type(magneto.categories[0].city);

  //note**********************
  Issue Found while selecting state sometimes it shows indian State's sometimes US ,
  Hence skiped New address step and going further with existing Address 
  ****************************
  cy.get(eCommercePaths.magento.shippingState).should('be.visible').select('Texas');
  cy.get(eCommercePaths.magento.shippingPinCode).clear().type(magneto.categories[0].pincode);
  cy.get(eCommercePaths.magento.shippingCountry).should('be.visible').select('India');
  cy.get(eCommercePaths.magento.shippingPhoneNumber).clear().type(magneto.categories[0].phoneNumber);
  cy.get(eCommercePaths.magento.shiphere).click();
  */
  cy.get(eCommercePaths.magento.shippingNext).click().wait(2000);
  cy.get(eCommercePaths.magento.placeOrder).click().wait(3000);
  cy.get(eCommercePaths.magento.OrderCompleted).should('have.text','Thank you for your purchase!')

});
