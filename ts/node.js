'use strict'

module.exports = {
  extends: [
    '../js/node',
    '.'
  ],
  rules: {
    // Already checked by TS
    'node/process-exit-as-throw': 0,

    // Compiled by TS
    'node/no-unsupported-features/es-syntax': 0
  }
}
