import { pipeline } from "combined-stream";

describe('E-commerce should login to Amazon and verify user is signed in', () => {
  beforeEach(() => {
    cy.viewport(1500, 900);
    cy.login();
    cy.verifySignIn('Hello, Sai');
    
  });

    
    
    it('should search for products in given categories and add them to the cart', () => {
    
      // need  to make this common 

      cy.get('#twotabsearchtextbox').type('Electronic');
      cy.get('#nav-search-submit-button').click();
      cy.scrollTo(0, 500);
      cy.contains('Add to cart').click();
      cy.contains('Item Added').should('be.visible')
      cy.get('.ewc-item-content > .a-row > .a-link-normal > .sc-product-image').should('have.length', 1)
      

      cy.get('#twotabsearchtextbox').clear().type('Table');
      cy.get('#nav-search-submit-button').click();
      cy.scrollTo(0, 500);
      cy.contains('Add to cart').click();
      cy.contains('Item Added').should('be.visible')
      cy.get('.ewc-item-content > .a-row > .a-link-normal > .sc-product-image').should('have.length', 2)
    
      cy.get('#twotabsearchtextbox').clear().type('Phone');
      cy.get('#nav-search-submit-button').click();
      cy.scrollTo(0, 500);
      cy.contains('Add to cart').click();
      cy.contains('Item Added').should('be.visible')
      cy.get('.ewc-item-content > .a-row > .a-link-normal > .sc-product-image').should('have.length', 3)
      
      
      // go  to cart 
      cy.contains('Go to Cart').click();
      cy.get('h1').contains('Shopping Cart');
      cy.get('input[data-feature-id="proceed-to-checkout-action"]').click();
      cy.get('h3.a-color-state').should('contain.text', 'Select a delivery address');
      cy.go('back');

   
     });

});


// 1. Add report 
// 2. Add pipeline

// 3.                   
// Choose an API of your liking. Here are some sources:

// https://github.com/public-apis/public-apis, 
// https://swapi.dev/, 
// https://any-api.com/   
                   
// Create a project that integrates with this API  
              
// Write 2 test cases (it can be happy paths; you don't need to find bugs)  