// @ts-expect-error
import { launcher as chromedriverLauncher } from 'wdio-chromedriver-service';
import { launcher as wiremockLauncher } from 'wdio-wiremock-service';
import { config } from './wdio.conf';

export default async function() {
  global.wiremockLauncher = new wiremockLauncher({ rootDir: '__stubs__' }, [(config as any).capabilities], config as any);
  global.chromedriverLauncher = new chromedriverLauncher({ port: 4444 }, [(config as any).capabilities], config);
  await global.wiremockLauncher.onPrepare();
  await global.chromedriverLauncher.onPrepare();
};
