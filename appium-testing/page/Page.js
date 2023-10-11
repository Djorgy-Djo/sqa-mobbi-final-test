class Page {
  constructor(driver) {
    /** @type {WebdriverIO.Browser} */ this.driver = driver;
  }

  get folderBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/sp_text");
  }
  get opsiBtnSelector() {
    return this.driver.$(
      "//android.widget.ImageView[@content-desc='Opsi lainnya']"
    );
  }
  get calendarBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/action_calendar");
  }
  get addTaskBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/fab");
  }
  get selectWokrFolderSelector() {
    return this.driver.$("//android.widget.TextView[@text='Work']");
  }
  get checkboxBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/cb_task");
  }

  async skipNotificationPage() {
    const skip = await this.driver.$(
      "com.mykhailovdovchenko.to_dolist:id/button3"
    );
    await skip.waitForClickable({ timeout: 10000 });
    skip.click();
  }

  //   async scrollPage(y1, y2) {
  //     await this.driver.touchPerform([
  //       { action: "press", options: { x: 200, y: y1 } },
  //       { action: "wait", options: { ms: 500 } },
  //       { action: "moveTo", options: { x: 200, y: y2 } },
  //       { action: "release" },
  //     ]);
  //   }

  //   async touchPage(x, y) {
  //     await this.driver.touchPerform([
  //       { action: "press", options: { x: x, y: y } },
  //       { action: "release" },
  //     ]);
  //   }

  async folderBtn() {
    await this.folderBtnSelector.click();
  }

  async calendarBtn() {
    await this.calendarBtnSelector.click();
  }

  async opsiBtn() {
    await this.opsiBtnSelector.click();
  }

  async addBtn() {
    const addBtnWait = await this.addTaskBtnSelector;
    await addBtnWait.waitForDisplayed({ timeout: 10000 });
    addBtnWait.click();
  }

  async selectWorkFolder() {
    await this.selectWokrFolderSelector.click();
  }

  async checkBoxBtn() {
    await this.checkboxBtnSelector.click();
  }
}

module.exports = Page;
