'use strict'

module.exports = {
  extends: ['./_base', 'plugin:node/recommended-script'],
  rules: {
    // Node
    'node/global-require': 2,
    'node/no-mixed-requires': 1,

    // Import
    'import/no-unresolved': [2, {commonjs: true}],
    'import/no-useless-path-segments': [
      1,
      {noUselessIndex: true, commonjs: true}
    ],
    'import/no-deprecated': 1,
    'node/no-extraneous-require': 0,
    'import/no-extraneous-dependencies': 2
  }
}
