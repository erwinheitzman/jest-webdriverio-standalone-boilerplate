// @ts-ignore
import { launcher as chromedriverLauncher } from 'wdio-chromedriver-service';
import { launcher as wiremockLauncher } from 'wdio-wiremock-service';
import { config } from './wdio.conf';

export default async function() {
  // require('expect-webdriverio');
  global.wiremockLauncher = new wiremockLauncher({ rootDir: '__stubs__' });
  global.chromedriverLauncher = new chromedriverLauncher(config, [config.capabilities], {});
  await global.wiremockLauncher.onPrepare();
  await global.chromedriverLauncher.onPrepare();
};
