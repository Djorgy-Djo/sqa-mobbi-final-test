const { By, until } = require("selenium-webdriver");
const Page = require("./Page");

class Dashboard extends Page {
  constructor(driver) {
    super(driver);
  }

  async openPage() {
    this.openUrl();
    new Promise((resolve) => setTimeout(resolve, 10000));
  }

  navBarSelectors = [
    By.xpath(
      "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[0]/a/p"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[1]/a/p"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[2]/a/p"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[4]/a/p"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[6]/a/p"
    ),
  ];
  searchSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[2]/nav/div[1]/div[2]/div/div[8]/p"
  );
  searchBarSelector = By.css("#search");
  searchBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[3]/section/div[2]/div/div/div/div"
  );

  async openNavMenu(number) {
    // await new Promise((done) => setTimeout(done, 10000));
    let navBtn = await this.driver.findElement(this.navBarSelectors[number]);
    await this.driver.wait(until.elementIsVisible(navBtn, 10000));
    await navBtn.click();
  }

  async searchProcess(key) {
    await this.driver.findElement(this.searchSelector).click();
    await new Promise((done) => setTimeout(done, 5000));
    await this.driver.findElement(this.searchBarSelector).sendKeys(key);
    await new Promise((done) => setTimeout(done, 5000));
    await this.driver.findElement(this.searchBtnSelector).click();
  }

  async addingItem() {
    await new Promise((done) => setTimeout(done, 10000));
    await this.driver
      .findElement(
        By.xpath(
          "//*[@id='root']/div/div/div/div[7]/div/div[2]/div/div[2]/div[5]/div[1]/img"
        )
      )
      .click();
  }
}

module.exports = Dashboard;
