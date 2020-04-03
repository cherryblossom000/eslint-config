'use strict'

module.exports = {
  extends: ['./js/browser'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./ts/browser']
    }
  ]
}
