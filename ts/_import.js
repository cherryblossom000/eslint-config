'use strict'

module.exports = {
  extends: [
    '../js/_import',
    'plugin:import/typescript'
  ],
  plugins: ['import'],
  rules: {
    // TS requires the json extension
    'import/extensions': [1, 'never', {json: 'always'}],

    // Already checked by TS/@typescript-eslint
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/export': 0,
    'import/no-named-as-default-member': 0,
    'import/no-commonjs': 0,

    // Compiled by TS
    'import/unambiguous': 0
  }
}
