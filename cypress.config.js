const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.amazon.in',
    specPattern: 'cypress/e2e/**/*.cy.js',
    apiBaseUrl:'https://api.github.com',
  },
  env: {
    GITHUB_USER: 'ayushinaidu825',
    GITHUB_TOKEN: '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'
  },
  "watchForFileChanges": false

});
