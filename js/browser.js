'use strict'

const {hasPackage} = require('../src/utils')

module.exports = {
  extends: [
    '.',
    '../_mixins/import',
    '../_mixins/es/2021',
    'plugin:compat/recommended'
  ],
  env: {
    es2021: true,
    browser: true
  },
  rules: {
    'import/no-nodejs-modules': 2,
    'unicorn/no-document-cookie': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/prefer-dom-node-append': 2,
    'unicorn/prefer-dom-node-dataset': 2,
    'unicorn/prefer-dom-node-text-content': 2,
    'unicorn/prefer-dom-node-remove': 2,
    'unicorn/prefer-keyboard-event-key': 2,
    'unicorn/prefer-modern-dom-apis': 2,
    'unicorn/require-post-message-target-origin': 2
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
