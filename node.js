'use strict'

module.exports = {
  extends: ['./js/node'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['./ts/node']
    }
  ]
}
