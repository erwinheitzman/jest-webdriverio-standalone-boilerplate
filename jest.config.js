module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: './jest.prepare.ts',
  globalTeardown: './jest.cleanup.ts',
  setupFilesAfterEnv: ['expect-webdriverio']
};
