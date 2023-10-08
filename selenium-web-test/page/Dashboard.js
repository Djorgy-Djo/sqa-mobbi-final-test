const { By, until } = require("selenium-webdriver");
const Page = require("./Page");

class Dashboard extends Page {
  constructor(driver) {
    super(driver);
  }

  async openPage() {
    this.openUrl();
    new Promise((resolve) => setTimeout(resolve, 15000));
  }

  hotItems = By.xpath(
    "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[1]/a/p"
  );
  availItems = By.xpath(
    "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[2]/a/p"
  );
  accessories = By.xpath(
    "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[4]/a/p"
  );

  async openMenuNav() {
    new Promise((resolve) => setTimeout(resolve, 15000));
    await this.driver.findElement(this.hotItems).click();
    new Promise((resolve) => setTimeout(resolve, 15000));
    await this.driver.findElement(this.availItems).click();
    new Promise((resolve) => setTimeout(resolve, 15000));
    await this.driver.findElement(this.accessories).click();
  }
}

module.exports = Dashboard;
