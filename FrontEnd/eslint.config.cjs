const globals = require('globals')
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const reactPlugin = require('eslint-plugin-react')
const prettierPlugin = require('eslint-plugin-prettier')
const tailwindPlugin = require('eslint-plugin-tailwindcss')

module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        jsx: true,
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      tailwindcss: tailwindPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'tailwindcss/no-custom-classname': 'off', // Отключаем проверку пользовательских классов
      'tailwindcss/no-contradicting-classname': 'error', // Проверяем на противоречащие классы
    },
  },
]
