const { WebDriver, By } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("../utils/setupDriver");
const LoginPage = require("../page/LoginPage.js");
const MemberPage = require("../page/MemberPage");

const expect = chai.expect;

describe("HeyMale.id web test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {LoginPage} */ let loginPage;
  /** @type {MemberPage} */ let memberPage;

  before(async function () {
    driver = await setupDriver();
    loginPage = new LoginPage(driver);
    memberPage = new MemberPage(driver);
  });

  describe("Melakukan login", function () {
    it("Berhasil melakukan login", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("marquezelio28@gmail.com", "Testing123");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const text = await loginPage.getTextByXpath(
        " //*[@id='root']/div/div/div/div[9]/section/div[2]/label[1]/span[2]"
      );
      expect(text).to.include(
        "Invalid email. Please check your email correctly."
      );
    });
  });

  describe("Mengklik menu wishlist", function () {
    it("berhasil membuka menu wishlist", async function () {
      await memberPage.openPage();
      await memberPage.openMemberWishlist();
      const text = await memberPage.getTextByXpath(
        "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[2]/div/h1"
      );
      expect(text).to.include("My Wishlist");
    });
  });

  describe("Mengklik menu Account Info", function () {
    it("berhasil membuka menu Account Info", async function () {
      await memberPage.openAccountInfo();
      const text = await memberPage.getTextByXpath(
        "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[2]/div/p"
      );
      expect(text).to.include("Account Info");
    });
  });

  describe("Mengklik menu Address", function () {
    it("berhasil membuka menu Address", async function () {
      await memberPage.openAddress();
      const text = await memberPage.getTextByXpath(
        "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[2]/div[2]/div[1]/p"
      );
    });
  });

  describe("Melakukan Logout", function () {
    it("berhasil melakukan Logout", async function () {
      await memberPage.performLogout();
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
