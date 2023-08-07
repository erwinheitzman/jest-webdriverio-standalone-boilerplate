import { launcher as wmLauncher } from "wdio-wiremock-service";

export default async function () {
  globalThis.wiremockLauncher = new wmLauncher({ rootDir: "__stubs__", port: 8080 });

  await wiremockLauncher.onPrepare();
}
