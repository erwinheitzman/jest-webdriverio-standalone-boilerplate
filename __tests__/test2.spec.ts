import { remote, Browser } from "webdriverio";
import { config } from "../wdio.conf";

let browser: Browser<"async">;

beforeAll(async () => {
  browser = await remote(config);
});

afterAll(async () => {
  await browser.deleteSession();
});

test("WebdriverIO test 2", async () => {
  await browser.url("https://webdriver.io");
  expect(await browser.getTitle()).toContain("WebdriverIO");
  const searchButton = await browser.$(".DocSearch-Button");
  await searchButton.click();
  const searchBar = await browser.$("#docsearch-input");
  await searchBar.setValue("click");
  const suggestions = await browser.$(".DocSearch-Hit");
  await suggestions.waitForExist();
});
