module.exports = {
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.[jt]s$': '$1',
  },
  testEnvironment: 'node',
  globalSetup: './jest.global.setup.ts',
  globalTeardown: './jest.global.teardown.ts',
  setupFilesAfterEnv: ['./jest.setup.after-env.ts'],
};
