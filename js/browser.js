'use strict'

module.exports = {
  extends: [
    '.',
    './_import'
  ],
  env: {
    es2020: true,
    browser: true
  },
  rules: {
    'import/no-nodejs-modules': 2
  }
}
