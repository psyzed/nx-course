export default {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/.nx'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
  },
  coverageDirectory: './coverage',
};
