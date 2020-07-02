'use strict'

const {hasPackage} = require('../src/util')

module.exports = {
  extends: [
    '.',
    './_import',
    'plugin:compat/recommended'
  ],
  env: {
    es2020: true,
    browser: true
  },
  rules: {
    'import/no-nodejs-modules': 2
  },
  ...hasPackage('eslint-plugin-html')
    ? {
      plugins: ['html'],
      settings: {
        'html/report-bad-indent': 1
      }
    }
    : {}
}
