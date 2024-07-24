const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename: "[status]_[datetime]-[name]-report",
    code:"false",
    autoOpen:"true",
    overwrite:"false"

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    AmazonbaseUrl: 'https://www.amazon.in',
    specPattern: 'cypress/e2e/**/*.cy.js',
    apiBaseUrl:'https://api.github.com',
    MagentoBaseUrl: 'https://magento.softwaretestingboard.com'

  },
  env: {
    GITHUB_USER: 'ayushinaidu825',
    GITHUB_TOKEN: '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'
  },
  "watchForFileChanges": false

});
