const { WebDriver, By } = require("selenium-webdriver");

class Page {
  constructor(driver) {
    /** @type {WebDriver} */ this.driver = driver;
  }

  async openUrl(path = "/") {
    await this.driver.get("https://heymale.id" + path);
  }

  async getTextByXpath(selector) {
    return await this.driver.findElement(By.xpath(selector)).getText();
  }

  async getAttributeByXpath(selector, attribute) {
    return await this.driver
      .findElement(By.xpath(selector))
      .getAttribute(attribute);
  }
}

module.exports = Page;
