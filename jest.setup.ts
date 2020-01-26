import { remote } from 'webdriverio'
import { RemoteOptions } from '@wdio/sync'

// @ts-ignore
import { launcher as wmLauncher } from 'wdio-wiremock-service'
// @ts-ignore
import { launcher } from 'wdio-chromedriver-service'

const CHROMEDRIVER_PORT = 4444
const WDIO_OPTIONS = {
  port: CHROMEDRIVER_PORT,
  path: '/', // remove `path` if you decided using something different from driver binaries.
  capabilities: {
    browserName: 'chrome'
  },
  waitforTimeout: 10000,
  logLevel: 'silent'
} as RemoteOptions

beforeAll(async () => {
  require('expect-webdriverio')
  global.wiremockLauncher = new wmLauncher({ rootDir: './__stubs__' })
  global.chromedriverLauncher = new launcher()
  await global.wiremockLauncher.onPrepare(WDIO_OPTIONS)
  await global.chromedriverLauncher.onPrepare(WDIO_OPTIONS)
  global.browser = await remote(WDIO_OPTIONS)
})
