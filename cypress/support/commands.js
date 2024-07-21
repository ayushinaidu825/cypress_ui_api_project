import { eCommercePaths } from '../configs/xpaths/eCommercePaths';
import userData from '../fixtures/userData.json';

Cypress.Commands.add('login', () => {
  cy.visit('https://www.amazon.in/').wait(1000);
  cy.get(eCommercePaths.loginPage.loginsignInButton).eq(0).click({force: true}).wait(3000);
  cy.get(eCommercePaths.loginPage.loginEmail).type(userData.username);
  cy.get(eCommercePaths.loginPage.continueButton).click({force: true}).wait(2000);
  cy.get(eCommercePaths.loginPage.loginPassword).type(userData.password);
  cy.get(eCommercePaths.loginPage.loginSubmit).click();
});

// Command to verify sign-in
Cypress.Commands.add('verifySignIn', (expectedText) => {
  cy.get(eCommercePaths.other.verifyAccountName).should('contain', expectedText);
});

Cypress.Commands.add('searchAndAddMultipleProducts', () => {
  
    // need to right 
    });
  

