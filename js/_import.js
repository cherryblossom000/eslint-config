'use strict'

module.exports = {
  extends: ['plugin:import/recommended'],
  rules: {
    // Static Analysis
    'node/no-missing-import': 0,
    'import/no-absolute-path': 2,
    'import/no-cycle': [2, {ignoreExternal: true}],
    'import/no-self-import': 2,
    'import/no-useless-path-segments': [1, {noUselessIndex: true}],
    'import/no-webpack-loader-syntax': 2,

    // Helpful Warnings
    'import/no-mutable-exports': 2,
    'import/no-unused-modules': [1, {unusedExports: true}],

    // Style Guide
    'import/first': 1,
    'import/no-duplicates': 1,
    'import/extensions': 1,
    'import/max-dependencies': 1,
    'import/no-named-default': 1,
    'import/no-unassigned-import': [1, {allow: ['reflect-metadata']}],
    'import/order': [
      1,
      {'newlines-between': 'never', alphabetize: {order: 'asc'}}
    ],
    'import/prefer-default-export': 1,

    'unicorn/prefer-module': 2
  }
}
