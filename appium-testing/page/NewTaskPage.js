const Page = require("./Page");

class NewTaskPage extends Page {
  constructor(driver) {
    super(driver);
  }

  get newTaskNameSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/et_name");
  }
  get workBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/btn_folder");
  }
  get lowBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/btn_low");
  }
  get mediumBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/btn_medium");
  }
  get highBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/btn_high");
  }
  get dateBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/btn_date");
  }
  get timeBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/btn_time");
  }
  get remindSwitchSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/switch_remind");
  }
  get repeatSwitchSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/switch_repeat");
  }
  get addCommentsSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/et_comments");
  }
  get subTaskCommentSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/et_subtask");
  }
  get addSubTaskBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/ib_subtask");
  }
  get doneBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/action_done");
  }
  get tglBtnSelector() {
    return this.driver.$(
      "//android.view.View[@content-desc='22 Oktober 2023']"
    );
  }
  get okBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/ok");
  }
  get multiBtnSelector() {
    return this.driver.$("com.mykhailovdovchenko.to_dolist:id/btn_multi");
  }
  get folderWorkBtnSelector() {
    return this.driver.$("//android.widget.TextView[@text='Work']");
  }

  async createWorkTask(task, comments, subTask) {
    await this.newTaskNameSelector.setValue(task);
    await this.folderWorkBtnSelector.click();
    await this.lowBtnSelector.click();
    await this.dateBtnSelector.click();
    const tgl = await this.tglBtnSelector;
    await tgl.waitForDisplayed({ timeout: 5000 });
    tgl.click();
    await this.okBtnSelector.click();
    await this.timeBtnSelector.click();
    const finish = await this.okBtnSelector;
    await finish.waitForDisplayed({ timeout: 5000 });
    finish.click();
    await this.remindSwitchSelector.click();
    await this.repeatSwitchSelector.click();
    await this.addCommentsSelector.setValue(comments);
    await this.subTaskCommentSelector.setValue(subTask);
    await this.addSubTaskBtnSelector.click();
    await this.doneBtnSelector.click();
  }
}

module.exports = NewTaskPage;
