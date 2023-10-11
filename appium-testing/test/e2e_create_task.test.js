const { expect } = require("chai");
const setupDriver = require("../utils/setupDriver");

const NewTaskPage = require("../page/NewTaskPage");

describe("E2E testing create new work task", function () {
  /** @type {WebdriverIO.Browser} */ let driver;
  /** @type {NewTaskPage} */ let newTaskPage;

  before(async function () {
    driver = await setupDriver();
    newTaskPage = new NewTaskPage(driver);
  });

  describe("click create new task", function () {
    it("should showing create new task page", async function () {
      await newTaskPage.skipNotificationPage();
      await newTaskPage.addBtn();
      const text = await driver
        .$("//android.widget.TextView[@text='New Task']")
        .getText();
      expect(text).to.equal("New Task");
    });
  });

  describe("create new work task", function () {
    it("success creating new task", async function () {
      await newTaskPage.createWorkTask(
        "Mengerjakan test case",
        "meneyelesaikan test case",
        "membuat test case"
      );
      const text = await driver
        .$("com.mykhailovdovchenko.to_dolist:id/tv_title")
        .getText();
      expect(text).to.equal("Mengerjakan test case");
    });
  });

  describe("marking done for task created", function () {
    it("task should be disapear", async function () {
      await newTaskPage.checkBoxBtn();
      const text = await driver
        .$("com.mykhailovdovchenko.to_dolist:id/ll_nothing_todo")
        .getText();
      expect(text).to.equal("Nothing to do…");
    });
  });

  after(async function () {
    await driver.pause(2000);
    await driver.deleteSession();
  });
});
