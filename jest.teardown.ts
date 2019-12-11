afterAll(async () => {
  await global.browser.deleteSession();
  await global.chromedriverLauncher.onComplete()
});