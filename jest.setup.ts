import { remote } from 'webdriverio'

// require('ts-node').register({ files: true })

beforeAll(async () => {
  global.browser = await remote({
    logLevel: 'error',
    port: 9515,
    path: '/', // remove `path` if you decided using something different from driver binaries.
    capabilities: {
        browserName: 'chrome'
    },
  });

  global.browser = browser;
})
