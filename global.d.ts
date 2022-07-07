import { WiremockLauncher } from "wdio-wiremock-service/lib/launcher";
import { Browser } from "webdriverio";

export declare global {
  var chrome: Browser<'async'>;
  var wiremockLauncher: WiremockLauncher;
}
