const { WebDriver } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("./utils/setupDriver");
const LoginPage = require("./page/LoginPage.js");

const expect = chai.expect;

describe("Sonderlab Web Test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {LoginPage} */ let loginPage;

  before(async function () {
    driver = await setupDriver();
    loginPage = new LoginPage(driver);
  });

  describe("Melakukan login dengan akun Djorgy djo", function () {
    it("Masuk ke halaman account Sonderlab", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("djorgy9112@gmail.com", "12345678");

      const url = await driver.getCurrentUrl();
      expect(url).to.equal("https://sonderlab.co/challange");
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
