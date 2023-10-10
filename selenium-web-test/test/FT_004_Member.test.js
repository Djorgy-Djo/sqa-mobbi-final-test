const { WebDriver } = require("selenium-webdriver");
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
    });
  });

  describe("Mengklik menu wishlist", function () {
    it("berhasil membuka menu wishlist", async function () {
      await memberPage.openPage();
      await memberPage.openMemberWishlist();
    });
  });

  describe("Mengklik menu Account Info", function () {
    it("berhasil membuka menu Account Info", async function () {
      await memberPage.openAccountInfo();
    });
  });

  describe("Mengklik menu Address", function () {
    it("berhasil membuka menu Address", async function () {
      await memberPage.openAddress();
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
