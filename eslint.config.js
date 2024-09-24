import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import vitest from '@vitest/eslint-plugin';

export default [
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['.yarn/**', '**/.storybook/**', '.pnp.cjs'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off', //  Vite.js handle this automatically
      '@typescript-eslint/no-require-imports': 'off', // Vite.js handle this automatically
    },
  },
  {
    files: ['**/**/**.test.**'], // or any other pattern
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      'vitest/max-nested-describe': ['error', { max: 3 }], // you can also modify rules' behavior using option like this
    },
  },
];
