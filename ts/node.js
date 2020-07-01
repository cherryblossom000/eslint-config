'use strict'

module.exports = {
  extends: [
    '../js/node',
    '.'
  ],
  settings: {
    node: {
      tryExtensions: ['.js', '.tsx', '.json', '.ts', '.tsx']
    }
  },
  rules: {
    // Already checked by TS
    'node/process-exit-as-throw': 0,

    // Compiled by TS
    'node/no-unsupported-features/es-syntax': 0
  }
}
