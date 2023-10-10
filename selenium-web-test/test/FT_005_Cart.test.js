const { WebDriver } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("../utils/setupDriver");
const CartPage = require("../page/CartPage");

const expect = chai.expect;

describe("HeyMale.id web test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {CartPage} */ let cartPage;

  before(async function () {
    driver = await setupDriver();
    cartPage = new CartPage();
  });

  describe("mengklik checkbox pada cart", function () {
    it("berhasil mengklik checkbox", async function () {
      await cartPage.openPage();
      await cartPage.clickCheckBox();
    });
  });

  describe("mengklik checkbox pada cart", function () {
    it("berhasil mengklik checkbox", async function () {
      await cartPage.clickMinPlusButton();
    });
  });

  describe("mengklik tombol checkout", function () {
    it("berpindah ke halaman detail checkout", async function () {
      await cartPage.clickCheckoutBtn();
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
