const { WebDriver } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("../utils/setupDriver");
const Dashboard = require("../page/Dashboard");

const expect = chai.expect;

describe("HeyMale Web Test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {Dashboard} */ let dashboard;

  before(async function () {
    driver = await setupDriver();
    dashboard = new Dashboard(driver);
  });

  describe("Mengklik semua menu pada navbar", function () {
    it("Menu Navbar terbuka", async function () {
      await dashboard.openPage();
      await dashboard.openMenuNav();
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
