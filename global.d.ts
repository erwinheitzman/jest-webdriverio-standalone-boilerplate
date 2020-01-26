declare module NodeJS  {
  interface Global {
    browser: any;
    wiremockLauncher: any;
    chromedriverLauncher: any;
  }
}