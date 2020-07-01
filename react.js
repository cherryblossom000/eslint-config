'use strict'

module.exports = {
  extends: ['./js/react'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./ts/react']
    }
  ]
}
