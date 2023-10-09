const { By, until } = require("selenium-webdriver");
const Page = require("./Page");

class DetailProductPage extends Page {
  constructor(driver) {
    super(driver);
  }

  sizeSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[2]/div[1]"
  );
  addToBag = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[3]/button"
  );
  cartBtn = By.xpath(
    "//*[@id='root']/div/div/div/div[2]/nav/div[2]/div[2]/img"
  );
  checkoutBtn = By.xpath(
    "//*[@id='root']/div/div/div/div[4]/div/div[2]/div[3]/div[3]/button"
  );

  async addingToCart() {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    await this.driver.findElement(this.sizeSelector).click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    await this.driver.findElement(this.addToBag).click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    await this.driver.findElement(this.cartBtn).click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    let btn = await this.driver.findElement(this.checkoutBtn);
    await this.driver.wait(until.elementIsVisible(btn), 10000);
    await btn.click();
  }
}

module.exports = DetailProductPage;
