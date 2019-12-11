declare namespace ChromeDriverLauncher {
  function onPrepare (
    config: object
  ): void;
  function onComplete (): void;
}

declare module NodeJS  {
  interface Global {
    browser: any;
    chromedriverLauncher: ChromeDriverLauncher;
  }
}

declare module 'wdio-chromedriver-service' {
  export {
    launcher: ChromeDriverLauncher
  }
}