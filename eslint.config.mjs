import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  prettierRecommended,
  reactRecommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    ignores: ['src/penpot.js', 'dist']
  }
];
