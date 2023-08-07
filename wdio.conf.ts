import { RemoteOptions } from "webdriverio";

const args = [];
const headless = !!process.env.HEADLESS;
if (headless) {
  args.push("--headless");
}

export const config: RemoteOptions = {
  capabilities: {
    browserName: "chrome",
    "goog:chromeOptions": {
      args,
    },
  },
  waitforTimeout: 15000,
  logLevel: "silent",
};
