const { By } = require("selenium-webdriver");
const Page = require("./Page");

class RegisterPage extends Page {
  constructor(driver) {
    super(driver);
  }

  async openPage() {
    await this.openUrl();
  }

  nameSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/label[1]/div[1]/input"
  );
  emailSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/label[2]/div[1]/input"
  );
  phoneSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/label[3]/div[1]/input"
  );
  passwordSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/label[4]/div[1]/input"
  );
  confirmPasswordSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/label[5]/div[1]/input"
  );
  birthSelectors = [
    By.xpath(
      "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/div[1]/div[1]/div/div/input[2]"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/div[1]/div[1]/div/div/input[3]"
    ),
    By.xpath(
      "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/div[1]/div[1]/div/div/input[4]"
    ),
  ];
  checkSelector = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/div[2]/input"
  );
  registerBtn = By.xpath(
    "//*[@id='root']/div/div/div/div[9]/section/div[2]/form/button"
  );

  async registerProcess() {
    await this.driver
      .findElement(
        By.xpath("/html/body/div/div/div/div/div[2]/nav/div[2]/div[1]/div/img")
      )
      .click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    await this.driver.findElement(
      By.css("//*[@id='root']/div/div/div/div[9]/section/div[2]/div/span")
    );
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await this.driver.findElement(this.nameSelector).sendKeys();
    await this.driver.findElement(this.emailSelector).sendKeys();
    await this.driver.findElement(this.phoneSelector).sendKeys();
    await this.driver.findElement(this.passwordSelector).sendKeys();
    await this.driver.findElement(this.confirmPasswordSelector).sendKeys();
    await this.driver.findElement(this.birthSelectors[1]).sendKeys();
    await this.driver.findElement(this.birthSelectors[2]).sendKeys();
    await this.driver.findElement(this.birthSelectors[3]).sendKeys();
    await this.driver.findElement(this.checkSelector).click();
    await this.driver.findElement(this.registerBtn).click();
  }
}
