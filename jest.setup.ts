import { remote } from 'webdriverio'
import { launcher } from 'wdio-chromedriver-service'

const CHROMEDRIVER_PORT = 4444
const WDIO_OPTIONS = {
  port: CHROMEDRIVER_PORT,
  path: '/', // remove `path` if you decided using something different from driver binaries.
  capabilities: {
      browserName: 'chrome'
  },
}

beforeAll(async () => {
  global.chromedriverLauncher = new launcher()
  await global.chromedriverLauncher.onPrepare(WDIO_OPTIONS)
  global.browser = await remote(WDIO_OPTIONS);
})
