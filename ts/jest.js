'use strict'

const {rules} = require('../jest')

module.exports = {
  extends: [
    '../js/jest',
    '.'
  ],
  overrides: [{
    files: ['tests/**/*.test.ts'],
    env: {jest: true},
    rules
  }]
}
