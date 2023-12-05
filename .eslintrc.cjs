module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  ignorePatterns: ['node_modules', '.eslintrc.cjs', 'dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'no-relative-import-paths'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'linebreak-style': ['error', 'unix'],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, prefix: '@src', rootDir: 'src' },
    ],
    'no-unused-vars': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
