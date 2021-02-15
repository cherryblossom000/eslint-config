'use strict'

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
