const { Builder, Browser } = require("selenium-webdriver");

async function setupDriver() {
  const driver = new Builder().forBrowser(Browser.EDGE).build();
  await driver.manage().window().maximize();
  return driver;
}

module.exports = setupDriver;
