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

  describe("Mengklik menu Hot Items", function () {
    it("berhasil membuka menu hot items", async function () {
      await dashboard.openPage();
      await dashboard.openNavMenu(1);
      const url = await driver.getCurrentUrl();
      expect(url).to.equal("https://heymale.id/shop/9/category/HOT%20ITEMS");
    });
  });

  describe("mengklik menu Available Items", function () {
    it("berhasil membuka menu available items", async function () {
      await dashboard.openPage();
      await dashboard.openNavMenu(2);
      const url = await driver.getCurrentUrl();
      expect(url).to.equal(
        "https://heymale.id/shop/9/category/AVAILABLE%20ITEMS"
      );
    });
  });

  describe("mengklik menu Accessories", function () {
    it("berhasil membuka menu accessories", async function () {
      await dashboard.openPage();
      await dashboard.openNavMenu(3);
      const url = await driver.getCurrentUrl();
      expect(url).to.equal("https://heymale.id/shop/9/category/ACCESSORIES");
    });
  });

  describe("mengklik menu Parfumes", function () {
    it("berhasil membuka menu parfumes", async function () {
      await dashboard.openPage();
      await dashboard.openNavMenu(4);
      const url = await driver.getCurrentUrl();
      expect(url).to.equal("https://heymale.id/shop/9/category/Parfumes");
    });
  });

  describe("Melakukan search kata kunci", function () {
    it("berhasil melakukan search", async function () {
      await dashboard.openPage();
      await dashboard.searchProcess("Peazy Double Breast Suits Black");
      const url = await driver.getCurrentUrl();
      expect(url).to.equal(
        "https://heymale.id/search?query=Peazy%20Double%20Breast%20Suits%20Black"
      );
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
