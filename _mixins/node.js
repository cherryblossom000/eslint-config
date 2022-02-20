'use strict'

module.exports = {
  extends: ['plugin:node/recommended'],
  env: {
    es2017: true,
    node: true
  },
  plugins: ['import', 'node'],
  parserOptions: {ecmaVersion: 2019},
  settings: {
    'import/resolver': 'node'
  },
  rules: {
    // Possible Errors
    'node/handle-callback-err': 2,
    'node/no-callback-literal': 2,
    'node/no-path-concat': 2,
    'no-process-exit': 0,
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

    // Import
    'node/no-extraneous-import': 0,
    'node/no-extraneous-require': 0,
    'node/no-missing-import': 0,
    'import/no-extraneous-dependencies': 2,

    'unicorn/text-encoding-identifier-case': 1
  }
}
