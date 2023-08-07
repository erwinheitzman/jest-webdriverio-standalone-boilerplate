import { WiremockLauncher } from "wdio-wiremock-service/lib/launcher";

export declare global {
  var chrome: WebdriverIO.Browser;
  var wiremockLauncher: WiremockLauncher;
}
