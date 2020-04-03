'use strict'

module.exports = {
  extends: ['./js/node'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./ts/node']
    }
  ]
}
