

  module.exports = {
    extends: [
      '@eslint-kit/patch',
      '@eslint-kit/base',
      '@eslint-kit/typescript',
      '@eslint-kit/react',
      '@eslint-kit/prettier',
    ],
    parser: '@typescript-eslint/parser',
    env: {
      node: true,
      browser: true,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    ignorePatterns: ['/node_modules/**/*', '/coverage/**/*', '/build/**/*', '/src/**/*generated.*', '/config/'],
    rules: {
      /*'import/order': [
        2,
        {
          pathGroups: ALLOWED_PATH_GROUPS,
          pathGroupsExcludedImportTypes: ['builtin'],
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        },
      ],*/
      'import/no-anonymous-default-export': 'off',
      'import/no-cycle': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-restricted-imports': [
        'warn',
        //2,
        {
          patterns: ['../../*'],
          //patterns: DENIED_PATH_GROUPS,
        },
      ],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          filter: {
            regex: '.*Component$',
            match: false,
          },
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "react/react-in-jsx-scope": "off",
      "unicorn/prefer-query-selector": "off",
    },
    overrides: [
      {
        files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
        env: {
          jest: true,
        },
        rules: {
          'no-magic-numbers': 'off',
          '@typescript-eslint/ban-ts-comment': 'off',
        },
      },
    ],
  };
  