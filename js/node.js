'use strict'

module.exports = {
  extends: [
    '.',
    'plugin:node/recommended'
  ],
  env: {
    es2017: true,
    node: true
  },
  plugins: ['import', 'node'],
  parserOptions: {ecmaVersion: 10},
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // Node
        'node/global-require': 2,
        'node/no-mixed-requires': 1,

        // Import
        'import/no-unresolved': [2, {commonjs: true}],
        'import/no-useless-path-segments': [1, {noUselessIndex: true, commonjs: true}],
        'import/no-deprecated': 1,
        'node/no-extraneous-require': 0,
        'import/no-extraneous-dependencies': 2
      }
    },
    {
      files: ['*.mjs'],
      extends: ['./_import'],
      rules: {
        'node/no-extraneous-import': 0,
        'import/extensions': [2, 'ignorePackages'],
        'import/no-commonjs': [2, {allowConditionalRequire: false}],
        'import/no-extraneous-dependencies': 2,
        'import/no-unused-modules': [1, {missingExports: true, unusedExports: true}],
        'import/no-useless-path-segments': 0
      }
    }
  ],
  rules: {
    // Possible Errors
    'node/handle-callback-err': 2,
    'node/no-callback-literal': 2,
    'node/no-path-concat': 2,
    'node/no-process-exit': 2,
    'node/process-exit-as-throw': 2,

    // Stylistic Issues
    'node/callback-return': 2,
    'node/exports-style': 1,
    'node/no-sync': 2,
    'node/prefer-global/buffer': 1,
    'node/prefer-global/console': 1,
    'node/prefer-global/process': 1,
    'node/prefer-global/text-decoder': 1,
    'node/prefer-global/text-encoder': 1,
    'node/prefer-global/url-search-params': 1,
    'node/prefer-global/url': 1,
    'node/prefer-promises/dns': 2,
    'node/prefer-promises/fs': 2,

    // Deprecated
    'no-process-exit': 0
  }
}
