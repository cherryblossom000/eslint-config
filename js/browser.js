'use strict'

const {hasPackage} = require('../src/util')

module.exports = {
  extends: ['.', './_import', 'plugin:compat/recommended'],
  env: {
    es2020: true,
    browser: true
  },
  rules: {
    'import/no-nodejs-modules': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/prefer-dataset': 2,
    'unicorn/prefer-event-key': 2,
    'unicorn/prefer-modern-dom-apis': 2,
    'unicorn/prefer-node-append': 2,
    'unicorn/prefer-node-remove': 2,
    'unicorn/prefer-text-content': 2
  },
  ...(hasPackage('eslint-plugin-html')
    ? {
        plugins: ['html'],
        settings: {
          'html/report-bad-indent': 1
        }
      }
    : {})
}
