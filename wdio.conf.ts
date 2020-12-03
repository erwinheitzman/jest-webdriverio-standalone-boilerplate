import { RemoteOptions } from '@wdio/sync';

export const config: RemoteOptions = {
    capabilities: {
        browserName: 'chrome'
    },
    waitforTimeout: 15000,
    logLevel: 'silent'
};