import { jest, beforeAll, afterAll } from "@jest/globals";
import { remote } from "webdriverio";
import { config } from "./wdio.conf";

jest.setTimeout(30000);

beforeAll(async () => {
  globalThis.chrome = await remote(config);
});

afterAll(async () => {
  await globalThis.chrome.deleteSession();
});
