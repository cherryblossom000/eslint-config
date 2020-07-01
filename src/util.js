'use strict'

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
