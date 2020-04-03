'use strict'

const {rules: importRules} = require('./_import')

const {'node/file-extension-in-import': fileExtensionInImport} = importRules

module.exports = {
  extends: [
    '../js/node',
    '.'
  ],
  rules: {
    'node/file-extension-in-import': [
      ...fileExtensionInImport.slice(0, 2),
      {...fileExtensionInImport[2], tryExtensions: ['.js', '.json', '.ts']}
    ],

    // Already checked by TS
    'node/process-exit-as-throw': 0,

    // Compiled by TS
    'node/no-unsupported-features/es-syntax': 0
  }
}
