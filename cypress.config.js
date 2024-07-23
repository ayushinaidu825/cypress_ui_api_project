const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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
