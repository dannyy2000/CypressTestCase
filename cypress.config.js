const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    projectId: '8c79dc07-5fe7-4fa5-a1d6-6c6d8ebdbf6a',
  },
});
