const { WebDriver, By } = require("selenium-webdriver");
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
      const text = await loginPage.getTextByCss(
        "#root > div > div > div > div.navbar.fixed.w-full.top-0.z-1 > nav > div.flex.items-center.gap-4 > div.flex.items-center.cursor-pointer > span"
      );
      expect(text).to.include("John");
      expect(url).to.equal("https://heymale.id/");
    });
  });

  describe("Mencoba melakukan Login dengan email salah", function () {
    it("gagal melakukan login", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("marquezelio28@gmail.com", "Testing123");
      const url = await driver.getCurrentUrl();
      const text = await loginPage.getTextByCss(
        "#root > div > div > div > div.navbar.fixed.w-full.top-0.z-1 > nav > div.flex.items-center.gap-4 > div.flex.items-center.cursor-pointer > span"
      );
      expect(text).to.include("John");
      expect(url).to.equal("https://heymale.id/");
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
