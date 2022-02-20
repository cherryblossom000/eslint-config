'use strict'

module.exports = {
  extends: ['../import', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-dynamic-require': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-require-imports': 2,

    // Already checked by TS/@typescript-eslint
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/export': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,

    // Doesn't support grouping type vs non-type imports
    'import/order': 0
  }
}
