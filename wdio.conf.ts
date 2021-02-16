import { RemoteOptions } from "webdriverio";

export const config: RemoteOptions = {
  capabilities: {
    browserName: "chrome",
  },
  waitforTimeout: 15000,
  logLevel: "silent",
};
