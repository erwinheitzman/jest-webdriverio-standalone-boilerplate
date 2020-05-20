export default async function() {
  await global.chromedriverLauncher.onComplete();
  await global.wiremockLauncher.onComplete();
};
