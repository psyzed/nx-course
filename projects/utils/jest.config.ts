export default {
  preset: '../../jest.preset.cjs',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  displayName: 'utils',
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};
