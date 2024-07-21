

describe('Nykaa Fashion Tests', () => {
    before(() => {
        cy.visit('https://www.nykaafashion.com');
      //cy.login('your-username', 'your-password');
    });
  
    // it('Search and add a product to the cart', () => {
    //   const productName = 'Dress';
    //   cy.xpath(xpaths.searchInput).type(productName);
    //   cy.xpath(xpaths.searchButton).click();
    //   cy.addToCart(productName);
    //   cy.verifyCart(productName);
    // });
  
    // it('Proceed to checkout without paying', () => {
    //   cy.proceedToCheckout();
    //   // Add assertions to verify the checkout steps without actual payment
    //   cy.xpath(xpaths.confirmButton).should('be.visible');
    // });
  });