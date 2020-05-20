import { remote } from 'webdriverio';
import { config } from '../wdio.conf';

let browser: WebdriverIO.BrowserObject;

beforeAll(async () => {
  browser = await remote(config);
});

afterAll(async () => {
  await browser.deleteSession();
});

test('asynchronous WebdriverIO test', async () => {
  await browser.url('https://webdriver.io');
  expect(await browser.getTitle()).toContain('WebdriverIO');
  const searchBar = await browser.$('#search_input_react');
  await searchBar.setValue('click');
  const suggestions = await browser.$('.aa-suggestions');
  await suggestions.waitForExist();
});
