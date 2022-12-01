const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  video: true,
  screenshotsFolder: 'cypress/reports/assets',
  pageLoadTimeout: 80000,
  defaultCommandTimeout: 10000,
  responseTimeout: 60000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://frontend.stg.b2b-asics.com/aop#/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on('task', verifyDownloadTasks)
      }
    },
});
