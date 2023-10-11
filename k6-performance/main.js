import { browser } from "k6/experimental/browser";

export const options = {
  scenarios: {
    protocolBased: {
      exec: "protocolBasedScript",
      executor: "constant-vus",
      vus: 10,
      duration: "10s",
    },
    browserBased: {
      exec: "browserBasedScript",
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export async function browserBasedScript() {
  const page = browser.newPage();

  try {
    await login_browser(page);
  } finally {
    page.close();
  }
}

export function protocolBasedScript() {}
