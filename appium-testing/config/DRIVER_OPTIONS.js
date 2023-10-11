const path = require("path");

const DRIVER_OPTIONS = {
  hostname: "0.0.0.0",
  port: 4723,
  logLevel: "error",
  capabilities: {
    platformName: "Android",
    "appium:automationName": "UIAutomator2",
    "appium:deviceName": "RR8N202L9ME",
    "appium:app": path.join(process.cwd(), "apk/Todo_list.apk"),
    "appium:appActivity": ".MainActivity",
  },
};

module.exports = DRIVER_OPTIONS;
