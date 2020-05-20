import { remote } from 'webdriverio';
import { config } from '../wdio.conf';
import sync from '@wdio/sync';

let browser: WebdriverIO.BrowserObject;

beforeAll(async () => {
  browser = await remote(config);
});

afterAll(async () => {
  await browser.deleteSession();
});

test('synchronous WebdriverIO test', () => (sync as any)(() => {
  browser.url('https://webdriver.io');
  expect(browser.getTitle()).toContain('WebdriverIO');
  // @ts-ignore
  browser.$('#search_input_react').setValue('click');
  // @ts-ignore
  browser.$('.aa-suggestions').waitForExist();
}));
