import { launcher as wmLauncher } from 'wdio-wiremock-service';

export default async function() {
  globalThis.wiremockLauncher = new wmLauncher({ rootDir: '__stubs__', port: 9090 });

  await wiremockLauncher.onPrepare();
};
