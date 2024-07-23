import { pipeline } from "combined-stream";
import { eCommercePaths } from "../../configs/xpaths/eCommercePaths";

describe("E-commerce should login to Amazon and verify user is signed in", () => {
  before(() => {
    cy.viewport(1500, 900);
    cy.login();
    cy.verifySignIn("Hello, sai");
  });

  describe("Add Multiple Items to Cart", () => {
    before(() => {
      cy.fixture("userData").then(function (data) {
        this.data = data;
      });
    });

    it("should search and add multiple items to the cart", function () {
      this.data.searchCriteria.forEach((keyword, index) => {
        cy.searchAndAddToCart(keyword);
        cy.get(eCommercePaths.search.productImageVerification).should(
          "have.length",
          index + 1
        );
      });
      cy.goToCart();
      cy.proceedToCheckout();
      cy.deleteRightPanel();
      cy.signOut();
    });
  });
});
