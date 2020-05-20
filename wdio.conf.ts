import { RemoteOptions } from '@wdio/sync';

const CHROMEDRIVER_PORT = 4444;

export const config: RemoteOptions = {
    port: CHROMEDRIVER_PORT,
    path: '/',
    capabilities: {
        browserName: 'chrome'
    },
    waitforTimeout: 10000,
    logLevel: 'silent'
};
