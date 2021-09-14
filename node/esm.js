'use strict'

module.exports = {
  extends: ['../js/node/esm'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['../ts/node/esm']
    }
  ]
}
