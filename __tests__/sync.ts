import { remote, Browser } from "webdriverio";
import { config } from "../wdio.conf";
import sync from "@wdio/sync";

let browser: Browser<"async">;

beforeAll(async () => {
  browser = await remote(config);
});

afterAll(async () => {
  await browser.deleteSession();
});

/**
 * "any" is used here because we are mixing both sync and async in one setup
 * this is because this boilerplate is meant to showcase how webdriverio
 * can be utilised
 */
test("synchronous WebdriverIO test", () =>
  sync(() => {
    browser.url("https://webdriver.io");
    expect(browser.getTitle()).toContain("WebdriverIO");
    (browser.$(".DocSearch-Button") as any).click();
    (browser.$("#docsearch-input") as any).setValue("click");
    (browser.$(".DocSearch-Hit") as any).waitForExist();
  }));
