
// cypress/support/e2e.js
import './commands';
import './commandsApi';
import 'cypress-mochawesome-reporter/register';        



require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('AddFotoramaVideoEvents is not a function')) {
        // returning false here prevents Cypress from
        // failing the test
        return false;
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'data')")) {
      return false;
    }
  });
  