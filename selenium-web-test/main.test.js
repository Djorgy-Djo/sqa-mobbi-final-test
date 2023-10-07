const { WebDriver } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("./utils/setupDriver");
const LoginPage = require("./page/LoginPage.js");
const Dashboard = require("./page/Dashboard");

const expect = chai.expect;

describe("Sonderlab Web Test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {LoginPage} */ let loginPage;
  /** @type {Dashboard} */ let dashboard;

  before(async function () {
    driver = await setupDriver();
    loginPage = new LoginPage(driver);
    dashboard = new Dashboard(driver);
  });

  // describe("Melakukan login dengan akun Djorgy djo", function () {
  //   it("Masuk ke halaman account Sonderlab", async function () {
  //     await loginPage.openPage();
  //     await loginPage.loginProcess("djorgy9112@gmail.com", "12345678");

  //     const url = await driver.getCurrentUrl();
  //     expect(url).to.equal("https://sonderlab.co/challenge");
  //   });
  // });

  describe("Membuka halaman New Arrivals", function () {
    it("berpindah kehalaman New Arrivals", async function () {
      await dashboard.openPage();
      // await dashboard.openNewArrivals();
      await dashboard.addToCartNewArrivals();
      // const url = await driver.getCurrentUrl();
      // expect(url).to.equal("https://sonderlab.co/collections/new-arrivals");
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
