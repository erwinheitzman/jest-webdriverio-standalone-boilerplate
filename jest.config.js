module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts', './jest.teardown.ts', 'expect-webdriverio']
};