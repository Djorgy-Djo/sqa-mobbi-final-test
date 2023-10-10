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
  sizeSelectors = [
    By.xpath(
      "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[2]/div[1]"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[2]/div[2]"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[2]/div[3]"
    ),
  ];

  whislistBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[3]/div[1]/button[1]"
  );

  shareBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[3]/div[1]/button[2]"
  );

  async openPage() {
    this.openUrl("/shop/product/mpeq02/peazy-pants-elastic-adjuster-black");
  }

  async clickSize(number) {
    await this.driver.findElement(this.sizeSelectors[number]).click();
  }

  async clickShare() {
    await this.driver.findElement(this.shareBtnSelector).click();
  }

  async clickAddtoBag() {
    await this.driver.findElement(this.addToBag).click();
  }

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
