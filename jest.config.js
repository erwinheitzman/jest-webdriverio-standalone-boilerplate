module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: './jest.global.setup.ts',
  globalTeardown: './jest.global.teardown.ts',
  setupFilesAfterEnv: ['./jest.setup.after-env.ts'],
};
