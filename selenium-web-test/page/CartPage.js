const { By, until, TouchSequence } = require("selenium-webdriver");
const Page = require("./Page");
const { titleIs } = require("selenium-webdriver/lib/until");

class CartPage extends Page {
  constructor(driver) {
    super(driver);
  }

  checkboxSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[3]/div[1]/div[2]/label/input"
  );
  addItemBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[3]/div[1]/div[2]/div/div/div/button[2]"
  );
  removeItemBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[3]/div[1]/div[2]/div/div/div/button[1]"
  );

  checkoutBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[3]/div[2]/div[5]/button"
  );

  async openPage() {
    this.openUrl("/cart");
  }

  async clickCheckBox() {
    await this.driver.findElement(this.checkboxSelector).click();
  }

  async clickCheckoutBtn() {
    await this.driver.findElement(this.addItemBtnSelector).click();
  }

  async clickMinPlusButton() {
    let plusBtn = await this.driver
      .findElement(this.addItemBtnSelector)
      .click();
    await this.driver.wait(until.elementIsVisible(plusBtn, 10000));
    await plusBtn.click();
    await plusBtn.click();
    await plusBtn.click();
    await this.driver.findElement(this.removeItemBtnSelector).click();
  }
}

module.exports = CartPage;
