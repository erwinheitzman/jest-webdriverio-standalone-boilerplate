import { expect } from "expect-webdriverio";
import { test } from "@jest/globals";

test("WebdriverIO test 1", async () => {
  await chrome.url("https://webdriver.io");
  await expect(chrome).toHaveTitle("WebdriverIO", { containing: true });
  const searchButton = await chrome.$(".DocSearch-Button");
  await searchButton.click();
  const searchBar = await chrome.$("#docsearch-input");
  await searchBar.setValue("click");
  const suggestions = await chrome.$(".DocSearch-Hit");
  await suggestions.waitForExist();
});
