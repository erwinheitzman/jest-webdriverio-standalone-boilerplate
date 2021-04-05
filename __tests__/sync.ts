import { remote, Browser } from "webdriverio";
import { config } from "../wdio.conf";
import sync from "@wdio/sync";

let asyncBrowser: Browser<'async'>;
let syncBrowser: Browser<'sync'>;

beforeAll(async () => {
  asyncBrowser = await remote(config);
  syncBrowser = asyncBrowser as unknown as Browser<'sync'>;
});

afterAll(async () => {
  await asyncBrowser.deleteSession();
});

test("synchronous WebdriverIO test", () =>
  sync(() => {
    syncBrowser.url("https://webdriver.io");
    expect(syncBrowser.getTitle()).toContain("WebdriverIO");
    syncBrowser.$(".DocSearch-Button").click();
    syncBrowser.$("#docsearch-input").setValue("click");
    syncBrowser.$(".DocSearch-Hit").waitForExist();
  }));
