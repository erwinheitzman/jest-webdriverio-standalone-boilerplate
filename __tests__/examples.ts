const sync = require('@wdio/sync').default
const nodeFetch = require('node-fetch')

test(`a mocked api response created using WireMock's HTTP API`, async () => {
  const expectedRes = {
    dummy: [
      {
      data: 'example'
      }
    ]
  };

  const body = JSON.stringify({
    request: {
        method: 'GET',
        url: '/new_data'
    },
    response: {
      status: 200,
      jsonBody: expectedRes
    }
  });

  await browser.call(async () => {
    await nodeFetch('http://localhost:8080/__admin/mappings/new', { method: 'POST', body })

    await nodeFetch('http://localhost:8080/new_data')
      .then((res: any) => res.json())
      .then((body: any) => expect(body).toEqual(expectedRes))
    });
});

test('asynchronous WebdriverIO test', async () => {
  await browser.url('https://webdriver.io')
  await expect(browser).toHaveTitle('WebdriverIO', { containing: true })
  const searchBar = await browser.$('#search_input_react')
  await searchBar.click()
  await browser.keys('click{enter}{ctrl} test test')
  const suggestions = await browser.$('.aa-suggestions')
  await suggestions.waitForExist()
})

test('synchronous WebdriverIO test', () => sync(() => {
  browser.url('https://webdriver.io')
  expect(browser.getTitle()).toContain('WebdriverIO')

  // @ts-ignore
  browser.$('#search_input_react').click()
  browser.keys('click{enter}{ctrl} test test')
  // @ts-ignore
  browser.$('.aa-suggestions').waitForExist()
}))