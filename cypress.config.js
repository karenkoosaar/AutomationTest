const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    environment: "saucedemo",
    standard_user_username: "standard_user",
    locked_out_user_username: "locked_out_user",
    password: "secret_sauce",
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  responseTimeout: 5000,
  numTestsKeptInMemory: 10,
  watchForFileChanges: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
