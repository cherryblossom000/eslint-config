'use strict'

const getPackageJson = require('eslint-plugin-node/lib/util/get-package-json')

const packageJson = getPackageJson()

module.exports = {
  extends:
    (packageJson && packageJson.type) === 'module' ? './esm' : './commonjs',
  overrides: [
    {files: ['*.cjs', '.*.cjs'], extends: ['./commonjs']},
    {files: ['*.mjs', '.*.mjs'], extends: ['./esm']}
  ]
}
