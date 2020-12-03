import { launcher as wiremockLauncher } from 'wdio-wiremock-service';

export default async function() {
  global.wiremockLauncher = new wiremockLauncher({ rootDir: '__stubs__' });

  await global.wiremockLauncher.onPrepare();
};
