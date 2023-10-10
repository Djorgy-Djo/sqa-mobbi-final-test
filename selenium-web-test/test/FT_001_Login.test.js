const { WebDriver } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("../utils/setupDriver");
const LoginPage = require("../page/LoginPage.js");
const MemberPage = require("../page/MemberPage");

const expect = chai.expect;

describe("HeyMale Web Test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {LoginPage} */ let loginPage;
  /** @type {MemberPage} */ let memberPage;

  before(async function () {
    driver = await setupDriver();
    loginPage = new LoginPage(driver);
    memberPage = new MemberPage(driver);
  });

  describe("Mencoba melakukan Login", function () {
    it("berhasil login, masuk ke dashboard", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("marquezelio28@gmail.com", "Testing123");
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const url = await driver.getCurrentUrl();
      const text = await loginPage.getTextByXpath(
        "//*[@id='root']/div/div/div/div[2]/nav/div[2]/div[1]/span"
      );
      expect(text).to.include("John");
      expect(url).to.equal("https://heymale.id/");
      await loginPage.clickLogin();
      await memberPage.performLogout();
    });
  });

  describe("Mencoba melakukan Login dengan email salah", function () {
    it("gagal melakukan login", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("emailtest@gmail.com", "Testing123");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const text = await loginPage.getTextByXpath(
        "//*[@id='root']/div/div/div/div[1]/p"
      );
      expect(text).to.include("(CLE002) Username/Password anda salah");
      // await loginPage.closeModalLogin();
    });
  });

  describe("Mencoba melakukan Login dengan email tanpa domain", function () {
    it("gagal melakukan login", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("emailtest", "Testing123");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const text = await loginPage.getTextByXpath(
        " //*[@id='root']/div/div/div/div[9]/section/div[2]/label[1]/span[2]"
      );
      expect(text).to.include(
        "Invalid email. Please check your email correctly."
      );
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
