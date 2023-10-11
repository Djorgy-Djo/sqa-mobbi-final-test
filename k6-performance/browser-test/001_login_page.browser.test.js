import { sleep } from "k6";

export default async function (page) {
  await page.goto("https://heymale.id/");
  page
    .locator("//*[@id='root']/div/div/div/div[2]/nav/div[2]/div[1]/div")
    .click();
  page.waitForSelector("//*[@id='root']/div/div/div/div[9]/section/div[2]");
  page.screenshot({ path: "screenshots/01_login_page.png" });
  sleep(3);
}
