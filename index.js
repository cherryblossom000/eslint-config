'use strict'

module.exports = {
  extends: ['./js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./ts']
    }
  ]
}
