'use strict'

module.exports = {
  extends: ['./js/jest'],
  overrides: [
    {
      files: ['tests/**/*.test.ts'],
      extends: ['./ts/jest']
    }
  ]
}
