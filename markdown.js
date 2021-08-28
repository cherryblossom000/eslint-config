'use strict'

const {hasPackage} = require('./src/utils')

module.exports = {
  plugins: ['markdown'],
  overrides: [
    {
      files: '**/*.md',
      processor: 'markdown/markdown'
    },
    {
      files: '**/*.md/*.{j,t}s',
      parserOptions: {
        ecmaFeatures: {impliedStrict: true}
      },
      rules: {
        'no-unused-labels': 0,
        'no-unused-vars': 0,
        strict: 0,
        'jsdoc/require-description': 0,
        'jsdoc/require-param': 0,
        'jsdoc/require-param-type': 0,
        'jsdoc/require-property': 0,
        'jsdoc/require-property-type': 0,
        'jsdoc/require-returns': 0,
        'jsdoc/require-returns-type': 0,
        'jsdoc/require-throws': 0,
        'jsdoc/require-yields': 0,
        'unicorn/no-unused-properties': 0,
        ...(hasPackage('eslint-plugin-import')
          ? {
              'import/default': 0,
              'import/named': 0,
              'import/namespace': 0,
              'import/no-extraneous-dependencies': 0,
              'import/no-unresolved': 0,
              'import/no-unused-modules': 0
            }
          : {}),
        ...(hasPackage('eslint-plugin-node')
          ? {
              'node/no-unpublished-import': 0,
              'node/no-unpublished-require': 0
            }
          : {})
      }
    }
  ]
}
