'use strict'

const {rules} = require('../jest')

module.exports = {
  extends: ['../js/jest'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {project: './tsconfig.json'},
  overrides: [
    {
      files: ['tests/**/*.test.ts'],
      env: {jest: true},
      rules
    }
  ]
}
