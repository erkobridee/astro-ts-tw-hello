// https://eslint.org/docs/latest/use/configure/configuration-files
import js from '@eslint/js';

// https://github.com/ota-meshi/eslint-plugin-astro?tab=readme-ov-file#configuration
import eslintPluginAstro from 'eslint-plugin-astro';

// https://www.npmjs.com/package/globals
import globals from 'globals';

//---///

export default [
  js.configs.recommended,

  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],

  {
    files: ['**/*.mjs'],

    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },

    ignores: ['*.d.ts']
  }
];
