// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
  plugins: { jest: jestPlugin },
  rules: {
    ...jestPlugin.configs.recommended.rules,
    '@typescript-eslint/no-explicit-any': 'off',
  },
});
