'use strict'

module.exports = {
  extends: ['./_base', '../_import', 'plugin:node/recommended-module'],
  rules: {
    'node/no-extraneous-import': 0,
    'import/extensions': [2, 'ignorePackages'],
    'import/no-commonjs': [2, {allowConditionalRequire: false}],
    'import/no-extraneous-dependencies': 2,
    'import/no-unused-modules': [
      1,
      {missingExports: true, unusedExports: true}
    ],
    'import/no-useless-path-segments': 0
  }
}
