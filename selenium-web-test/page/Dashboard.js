const { By, until } = require("selenium-webdriver");
const Page = require("./Page");

class Dashboard extends Page {
  constructor(driver) {
    super(driver);
  }

  async openPage() {
    this.openUrl("/collections/new-arrivals");
  }

  async openNewArrivals() {
    let el = await this.driver.findElement(
      By.xpath("//*[@id='main-navigation-wrapper']/ul/li[1]/a")
    );
    await this.driver.wait(until.elementLocated(el), 1000);
    await el.click();
  }

  async addToCartNewArrivals() {
    await this.driver
      .findElement(
        By.xpath(
          "/html/body/div[1]/div[4]/div[1]/div/div/div[3]/div/div/div[1]/div/div[2]/a/span[1]"
        )
      )
      .click();

    await this.driver.findElement(By.xpath("//*[@id='purchase']")).click();

    await this.driver
      .findElement(
        By.xpath("//*[@id='cartSlideoutWrapper']/div[5]/div[4]/button")
      )
      .click();

    let popUp = await this.driver.findElement(
      By.xpath("//*[@id='block-actions']/div[2]/div")
    );
    await this.driver.wait(until.elementLocated(popUp), 10000);
    await popUp.click();
  }

  async openRunwayCollection() {
    await this.driver
      .findElement(By.xpath("/li[1]/a[text()='Runway Collection']"))
      .click();
  }

  async openSonderExclusive() {
    await this.driver.findElement(By.xpath());
  }
}

module.exports = Dashboard;
