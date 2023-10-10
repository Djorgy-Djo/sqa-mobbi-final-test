const { By, until } = require("selenium-webdriver");
const Page = require("./Page");

class MemberPage extends Page() {
  constructor(driver) {
    super(driver);
  }

  memberOrder = By.xpath(
    "//*[@id='root']/div/div/div/div[2]/nav/div[2]/div[1]/span"
  );
  logoutBtn = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[1]/div[5]"
  );
  wishtlistBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[1]/div[2]"
  );
  accountInfoBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[1]/div[3]"
  );
  addressBtnSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[7]/div/div[2]/div[1]/div[4]"
  );

  async openPage() {
    this.openUrl("/member/order");
  }

  async openMemberOrder() {
    let memberBtn = await this.driver.findElement(this.memberOrder);
    await this.driver.wait(until.elementIsVisible(memberBtn, 10000));
    await memberBtn.click();
  }

  async openMemberWishlist() {
    await this.driver.findElement(this.wishtlistBtnSelector).click();
  }

  async openAccountInfo() {
    await this.driver.findElement(this.accountInfoBtnSelector).click();
  }

  async openAddress() {
    await this.driver.findElement(this.addressBtnSelector).click();
  }

  async performLogout() {
    await this.driver.findElement(this.logoutBtn).click();
  }
}

module.exports = MemberPage;
