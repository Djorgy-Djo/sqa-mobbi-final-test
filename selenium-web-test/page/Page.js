const { WebDriver } = require("selenium-webdriver");

class Page {
  constructor(driver) {
    /** @type {WebDriver} */ this.driver = driver;
  }

  async openUrl(path = "/") {
    await this.driver.get("https://heymale.id" + path);
  }
}

module.exports = Page;
