const sync = require('@wdio/sync').default

test('asynchronous WebdriverIO test', async () => {
  await browser.url('https://webdriver.io')
  await expect(browser).toHaveTitle('WebdriverIO', { containing: true })
  const searchBar = await browser.$('#search_input_react')
  await searchBar.click()
  await browser.keys('click{enter}{ctrl} test test')
  await browser.pause(1000)
})

test('synchronous WebdriverIO test', () => sync(() => {
  browser.url('https://webdriver.io')
  expect(browser.getTitle()).toContain('WebdriverIO')

  // @ts-ignore
  browser.$('#search_input_react').click()
  browser.keys('click{enter}{ctrl} test test')
}))