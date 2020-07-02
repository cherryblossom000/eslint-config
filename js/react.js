'use strict'

module.exports = {
  extends: [
    './browser',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'jsx-quotes': 1,
    'react-hooks/exhaustive-deps': 2
  }
}
