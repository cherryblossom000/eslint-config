'use strict'

module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  env: {jest: true},
  rules: {
    'jest/consistent-test-it': [1, {fn: 'test'}],
    'jest/expect-expect': 2,
    'jest/max-nested-describe': 1,
    'jest/no-duplicate-hooks': 1,
    'jest/no-identical-title': 1,
    'jest/no-if': 2,
    'jest/no-test-prefixes': 1,
    'jest/no-test-return-statement': 1,
    'jest/prefer-called-with': 2,
    'jest/prefer-comparison-matcher': 2,
    'jest/prefer-equality-matcher': 2,
    'jest/prefer-expect-resolves': 2,
    'jest/prefer-hooks-on-top': 1,
    'jest/prefer-lowercase-title': 1,
    'jest/prefer-snapshot-hint': 1,
    'jest/prefer-spy-on': 2,
    'jest/prefer-to-be': 1,
    'jest/prefer-todo': 1,
    'jest/require-hook': 2,
    'jest/require-to-throw-message': 2,
    'jest/require-top-level-describe': 1,
    'jest/valid-expect': [2, {alwaysAwait: true}],
    'jest/valid-title': 1
  }
}
