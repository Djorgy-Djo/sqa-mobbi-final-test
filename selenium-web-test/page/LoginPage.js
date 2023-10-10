const { By } = require("selenium-webdriver");
const Page = require("./Page");

class LoginPage extends Page {
  constructor(driver) {
    super(driver);
  }

  usernameEl = By.css("#email");
  passwordEl = By.css("#password");
  loginBtnEl = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/button"
  );
  errorEl = By.css(".errors");

  async openPage() {
    await this.openUrl();
  }

  async clickLogin() {
    await this.driver
      .findElement(
        By.xpath("/html/body/div/div/div/div/div[2]/nav/div[2]/div[1]/div/img")
      )
      .click();
  }

  async closeModalLogin() {
    await this.driver
      .findElement(
        By.xpath("//*[@id='root']/div/div/div/div[9]/section/div[1]/svg")
      )
      .click();
  }

  async loginProcess(username, password) {
    await this.driver
      .findElement(
        By.xpath("/html/body/div/div/div/div/div[2]/nav/div[2]/div[1]/div/img")
      )
      .click();

    await new Promise((resolve) => setTimeout(resolve, 5000));
    await this.driver.findElement(this.usernameEl).sendKeys(username);
    await this.driver.findElement(this.passwordEl).sendKeys(password);
    await this.driver.findElement(this.loginBtnEl).click();
  }

  async errMsg() {
    const msg = await this.driver.findElement(this.errorEl).getText();
    return msg;
  }
}

module.exports = LoginPage;
