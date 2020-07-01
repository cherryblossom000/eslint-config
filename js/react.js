'use strict'

module.exports = {
  extends: [
    './browser',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['react-hooks'],
  rules: {
    'jsx-quotes': 1,
    'react-hooks/exhaustive-deps': 2
  }
}
