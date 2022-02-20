'use strict'

const getPackageJson = require('eslint-plugin-node/lib/util/get-package-json')

// /**
//  * Checks if a package is installed.
//  *
//  * @param {string} name The name of the package.
//  * @returns {boolean} Whether the package is installed.
//  * @throws Any error that isn't `MODULE_NOT_FOUND` thrown by `require`.
//  */
// module.exports.hasPackage = name => {
//   let hasPackage = false
//   try {
//     // eslint-disable-next-line node/global-require -- conditionally requiring
//     require(name)
//     hasPackage = true
//   } catch (error) {
//     if (error.code !== 'MODULE_NOT_FOUND') throw error
//   }
//   return hasPackage
// }

/**
 * Checks whether this is an ESM file.
 *
 * @returns {boolean} Whether this is an ESM file.
 */
module.exports.isESM = () => {
  const packageJson = getPackageJson()
  return (packageJson && packageJson.type) === 'module'
}
