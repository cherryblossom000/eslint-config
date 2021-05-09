'use strict'

module.exports = {
  extends: ['../../js/node/_base', '..'],
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.ts']
    }
  },
  rules: {
    // Already checked by TS
    'node/no-missing-import': 0,
    'node/process-exit-as-throw': 0,

    // Compiled by TS
    'node/no-unsupported-features/es-syntax': 0
  }
}
