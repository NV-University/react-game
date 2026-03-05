import js from '@eslint/js';
import {globalIgnores} from 'eslint/config';
import eslintPrettierConfig from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  eslintPluginReactHooks.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintPrettierConfig],
    plugins: {import: eslintPluginImport, 'simple-import-sort': eslintPluginSimpleImportSort},
    rules: eslintPluginImport.flatConfigs.recommended.rules,
  },

  globalIgnores(['dist', 'routeTree.gen.ts', '.yarn', 'node_modules']),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side-effect imports (polyfills, etc.)
            ['^\\u0000'],
            // External packages
            ['^react', '^(?!(react))@?\\w'],
            // Internal modules
            [
              '^@/pages',
              '^@/components',
              '^@/hooks',
              '^@/features',
              '^@/api',
              '^@/utils',
              '^@/lib',
              '^@/configs',
              '^@/types',
              '^@/store',
              '^@/routes',
              '^@/assets',
              '^@/locales',
              '^@/constants',
            ],
            // Relative imports last
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Styles last of all
            ['^.+\\.(css|scss|sass|less|styl)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 2,
      'import/named': 0,
      'import/newline-after-import': 2,
      'import/no-anonymous-default-export': 0,
      'import/no-duplicates': 2,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/no-unresolved': 0,
      'import/order': 0,
      'import/prefer-default-export': 0,
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    extends: [reactRefresh.configs.vite],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      'react-hooks/exhaustive-deps': 2,
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/set-state-in-effect': 0,
      'react-hooks/preserve-manual-memoization': 0,
      'react/display-name': 0,
      'react-refresh/only-export-components': 0,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommendedTypeChecked],
    rules: {
      '@typescript-eslint/only-throw-error': 0,
      '@typescript-eslint/no-misused-promises': 0,
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          args: 'all',
          argsIgnorePattern: '.*',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/unbound-method': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/no-explicit-any': 1,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
