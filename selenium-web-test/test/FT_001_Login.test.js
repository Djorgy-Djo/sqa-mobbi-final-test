const { WebDriver } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("../utils/setupDriver");
const LoginPage = require("../page/LoginPage.js");

const expect = chai.expect;

describe("HeyMale Web Test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {LoginPage} */ let loginPage;

  before(async function () {
    driver = await setupDriver();
    loginPage = new LoginPage(driver);
  });

  describe("Mencoba melakukan Login", function () {
    it("berhasil login, masuk ke dashboard", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("marquezelio28@gmail.com", "Testing123");
      const url = await driver.getCurrentUrl();
      expect(url).to.equal("https://heymale.id/");
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
