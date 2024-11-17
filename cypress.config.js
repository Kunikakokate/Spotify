const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //etupNodeEvents,
      // implement node event listeners here
    specPattern:"cypress/support/**/*"
  },
});