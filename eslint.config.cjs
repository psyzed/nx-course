const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', 'eslint.config.cjs', '**/coverage', '**/.nx'],
  },
  {
    files: ['**/*.ts'],
    // Override or add rules here
    rules: {
      semi: 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'prefer-const': 'error',
    },
  },
];
