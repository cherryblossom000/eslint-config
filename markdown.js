'use strict'

const {hasPackage} = require('./src/util')

module.exports = {
  plugins: ['markdown'],
  overrides: [
    {
      files: ['**/*.md'],
      parserOptions: {
        ecmaFeatures: {impliedStrict: true}
      },
      rules: {
        'no-unused-vars': 0,
        strict: 0,
        'unicorn/no-unused-properties': 0,
        ...(hasPackage('eslint-plugin-jsdoc')
          ? {
              'jsdoc/require-description': 0,
              'jsdoc/require-param': 0,
              'jsdoc/require-property': 0,
              'jsdoc/require-returns': 0,
              'jsdoc/require-throws': 0
            }
          : {})
      }
    }
  ]
}
