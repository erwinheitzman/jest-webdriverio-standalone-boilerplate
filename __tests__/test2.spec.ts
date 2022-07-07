test("WebdriverIO test 2", async () => {
  await chrome.url("https://webdriver.io");
  expect(await chrome.getTitle()).toContain("WebdriverIO");
  const searchButton = await chrome.$(".DocSearch-Button");
  await searchButton.click();
  const searchBar = await chrome.$("#docsearch-input");
  await searchBar.setValue("click");
  const suggestions = await chrome.$(".DocSearch-Hit");
  await suggestions.waitForExist();
});
