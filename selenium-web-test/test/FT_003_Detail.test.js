const { WebDriver, By } = require("selenium-webdriver");
const chai = require("chai");
const setupDriver = require("../utils/setupDriver");
const DetailProductPage = require("../page/DetailProductPage");

const expect = chai.expect;

describe("HeyMale.id web test", function () {
  /** @type {WebDriver} */ let driver;
  /** @type {DetailProductPage} */ let detailProductPage;

  before(async function () {
    driver = await setupDriver();
    detailProductPage = new DetailProductPage();
  });

  describe("Mengklik ukuran", function () {
    it("ukuran berhasil berganti", async function () {
      await detailProductPage.openPage();
      await detailProductPage.clickSize(1);
      await detailProductPage.clickSize(2);
      await detailProductPage.clickSize(3);
    });
  });

  describe("Mengklik tombol add to bag", function () {
    it("berhasil menambahkan produk ke cart", async function () {
      await detailProductPage.clickAddtoBag();
      const text = await detailProductPage.getTextByXpath(
        "//*[@id='root']/div/div/div/div[2]/nav/div[2]/div[2]/div[1]"
      );
    });
    expect(text).to.include(1);
  });

  describe("Mengklik tombol share", function () {
    it("muncul opsi untuk share produk", async function () {
      await detailProductPage.clickShare();
      const text = await detailProductPage.getTextByXpath(
        "//*[@id='root']/div/div/div/div[7]/div/div[1]/div[2]/div[3]/div[1]/div/section/div[1]/h1"
      );
      expect(text).to.include("Share to");
    });
  });

  after(async function () {
    await new Promise((done) => setTimeout(done, 5000));
    await driver.close();
  });
});
