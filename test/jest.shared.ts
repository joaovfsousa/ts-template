export default {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.(t|j)s'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  rootDir: '..',
  setupFiles: ['<rootDir>/test/jest.setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  verbose: true,
};
