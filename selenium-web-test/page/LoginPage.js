const { By } = require("selenium-webdriver");
const Page = require("./Page");

class LoginPage extends Page {
  constructor(driver) {
    super(driver);
  }

  usernameEl = By.css("#customer_email");
  passwordEl = By.css("#customer_password");
  loginBtnEl = By.css("#customer_login .action-bottom .btn");
  errorEl = By.css(".errors");

  async openPage() {
    await this.openUrl("/account/login");
  }

  async loginProcess(username, password) {
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
