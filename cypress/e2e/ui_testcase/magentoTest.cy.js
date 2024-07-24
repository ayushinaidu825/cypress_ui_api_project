import { eCommercePaths } from "../../configs/xpaths/eCommercePaths";

describe('Login and verify Magento app test', () => {

    before(() => {
        cy.viewport(1500, 900);
        cy.Magentologin();
        cy.wait(2000);
      });

    it('Search products by given criteria', () => {
        cy.searchBycategory1();
        cy.searchBycategory2();
        cy.searchBycategory3();
        cy.checkoutToCart();
    });
  
  });