test('test', async () => {
  await browser.url('https://webdriver.io')
  const searchBar = await browser.$('#search_input_react')
  await searchBar.click()
  await browser.keys('click{enter}{ctrl} test test')
  await browser.pause(1000)
})