import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['dist', 'build', 'node_modules'],
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,

      // Prettier integration
      'prettier/prettier': 'warn',

      // Code quality rules
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'eqeqeq': 'error',
    },
  },
]
