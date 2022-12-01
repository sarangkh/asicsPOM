const path = require("path");
const fs = require("fs-extra");

function getConfigurationFileByEnvName(env) {
  const fileLocation = path.resolve("cypress/config", `config.${env}.json`);
  return fs.readJson(fileLocation);
};
module.exports = (on, config) => {
  const envFile = config.env.configFile || "local";
  return getConfigurationFileByEnvName(envFile);
};