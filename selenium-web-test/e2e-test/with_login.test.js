const { WebDriver } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("../utils/setupDriver");
const LoginPage = require("../page/LoginPage.js");
const Dashboard = require("../page/Dashboard");
const DetailProductPage = require("../page/DetailProductPage");
const CheckoutPage = require("../page/CheckoutPage");

const expect = chai.expect;

describe("heymale.id e2e test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {LoginPage} */ let loginPage;
  /** @type {Dashboard} */ let dashboard;
  /** @type {DetailProductPage} */ let detailProductPage;
  /** @type {CheckoutPage} */ let checkoutPage;

  before(async function () {
    driver = await setupDriver();
    loginPage = new LoginPage(driver);
    dashboard = new Dashboard(driver);
    detailProductPage = new DetailProductPage(driver);
    checkoutPage = new CheckoutPage(driver);
  });

  describe("proses Login", function () {
    it("berhasil login dan masuk ke halaman utama", async function () {
      await loginPage.openPage();
      await loginPage.loginProcess("marquezelio28@gmail.com", "Testing123");
      const url = await driver.getCurrentUrl();
      expect(url).to.equal("https://heymale.id/");
    });
  });

  describe("mengklik menu hot items", function () {
    it("berhasil masuk ke halaman hot items", async function () {
      await dashboard.openNavMenu(1);
      const url = await driver.getCurrentUrl();
      expect(url).to.equal("https://heymale.id/shop/9/category/HOT%20ITEMS");
    });

    describe("mengklik produk yg akan dibeli", function () {
      it("berhasil berpindah ke detail produk", async function () {
        await dashboard.addingItem();
        const url = await driver.getCurrentUrl();
        expect(url).to.equal(
          "https://heymale.id/shop/product/mpeq02/peazy-pants-elastic-adjuster-black"
        );
      });
    });

    describe("memilih size dan masukan ke cart", function () {
      it("berhasil memilih size dan memasukan ke cart", async function () {
        await detailProductPage.addingToCart();
        const url = await driver.getCurrentUrl();
        expect(url).to.equal(
          "https://heymale.id/shop/product/mpeq02/peazy-pants-elastic-adjuster-black"
        );
      });
    });

    describe("melakukan payment", function () {
      it("berhasil melakukan payment", async function () {
        await checkoutPage.paymentProcess();
        const url = await driver.getCurrentUrl();
        expect(url).to.equal("https://heymale.id/checkout");
      });
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
