afterAll(async () => {
  await global.browser.deleteSession()
  await global.chromedriverLauncher.onComplete()
  await global.wiremockLauncher.onComplete()
});