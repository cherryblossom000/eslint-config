'use strict'

const getPackageJson = require('eslint-plugin-node/lib/util/get-package-json')

/**
 * Checks if a package is installed.
 *
 * @param {string} name The name of the package.
 * @returns {boolean} Whether the package is installed.
 * @throws Any error that isn't `MODULE_NOT_FOUND` thrown by `require`.
 */
module.exports.hasPackage = name => {
  let hasPackage = false
  try {
    // eslint-disable-next-line node/global-require -- conditionally requiring
    require(name)
    hasPackage = true
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') throw error
  }
  return hasPackage
}

/**
 * Gets the Node.js configuration that detects whether the package is using ESM
 * or CommonJS modules.
 *
 * @returns {import('@types/eslint').Linter.Config} The configuration.
 */
module.exports.nodeConfig = () => {
  const packageJson = getPackageJson()
  return {
    extends:
      (packageJson && packageJson.type) === 'module' ? './esm' : './commonjs',
    overrides: [
      {files: ['*.cjs', '.*.cjs'], extends: ['./commonjs']},
      {files: ['*.mjs', '.*.mjs'], extends: ['./esm']}
    ]
  }
}
