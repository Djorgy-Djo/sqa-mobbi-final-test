const { By } = require("selenium-webdriver");
const Page = require("./Page");

class RegisterPage extends Page {
  constructor(driver) {
    super(driver);
  }

  async openPage() {
    await this.openUrl();
  }

  async registerProcess() {
    await this.driver
      .findElement(
        By.xpath("/html/body/div/div/div/div/div[2]/nav/div[2]/div[1]/div/img")
      )
      .click();
  }
}
