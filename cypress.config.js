const { defineConfig } = require('cypress');
const { verifyDownloadTasks } = require('cy-verify-downloads');
//const setupNodeEvents = require('./cypress/support/index.js');

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  video: false,
  screenshotsFolder: 'cypress/reports/assets',
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 60000,
  responseTimeout: 60000,
  viewportWidth: 1280,
  viewportHeight: 720,
  //setupNodeEvents,
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://frontend.stg.b2b-asics.com/aop#/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on('task', verifyDownloadTasks);
      }
    },
});
