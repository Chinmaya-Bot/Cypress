const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ea2awg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})