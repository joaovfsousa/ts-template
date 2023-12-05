import config from './jest.shared';

export default {
  ...config,
  rootDir: '.',
  testMatch: ['<rootDir>/e2e/**/*.spec.ts'],
  setupFiles: ['<rootDir>/../test/setup.ts'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/../src/$1',
  },
};
