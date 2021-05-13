'use strict'

module.exports = {
  extends: ['..', 'plugin:node/recommended'],
  env: {
    es2017: true,
    node: true
  },
  plugins: ['import'],
  parserOptions: {ecmaVersion: 10},
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
    'no-process-exit': 0,

    // Unicorn
    'unicorn/prefer-node-protocol': 1
  }
}
