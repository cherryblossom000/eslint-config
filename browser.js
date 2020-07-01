'use strict'

module.exports = {
  extends: ['./js/browser'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['./ts/browser']
    }
  ]
}
