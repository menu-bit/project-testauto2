const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '74h6bk',
    env: {
    apiUrl: "http://localhost:8081"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200/#/'
  },
});
