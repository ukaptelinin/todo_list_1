module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // For Next.js or React 17+
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  };
  