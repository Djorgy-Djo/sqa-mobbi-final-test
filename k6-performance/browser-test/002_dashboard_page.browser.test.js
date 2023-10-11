import { sleep } from "k6";

export default async function (page) {
  await page.goto("https://heymale.id/");
  page.waitForSelector("//*[@id='root']/div/div/div/div[7]/div/div[1]/div[1]");
  page.screenshot({ path: "screenshots/02_dashboard_page.png" });
  sleep(3);
}
