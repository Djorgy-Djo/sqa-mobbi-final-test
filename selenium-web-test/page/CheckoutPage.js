const { By, until } = require("selenium-webdriver");
const Page = require("./Page");

class CheckoutPage extends Page {
  constructor(driver) {
    super(driver);
  }

  paymentBcaBtn = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div[2]/div[1]/img[1]"
  );
  checkoutBtn = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[2]/div[2]/div[5]/button"
  );

  async paymentProcess() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await this.driver.findElement(this.paymentBcaBtn).click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await this.driver.findElement(this.checkoutBtn).click();
  }
}

module.exports = CheckoutPage;
