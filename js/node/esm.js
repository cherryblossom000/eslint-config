'use strict'

module.exports = {
  extends: [
    '../../_mixins/node',
    '../../_mixins/esm',
    'plugin:node/recommended-module'
  ],
  rules: {
    'import/no-extraneous-dependencies': 2
  }
}
