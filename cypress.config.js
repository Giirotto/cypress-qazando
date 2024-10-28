const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f146xw',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions:{
      charts: true,
      reportTitle: 'Cypress E2E',
    },
    fixturesFolder: false,
    baseUrl: 'http://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

// npx cypress run --record --key 3061ee7c-1fdb-4d45-a872-de42f17448d2
