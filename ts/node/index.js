'use strict'

const {isESM} = require('../../src/utils')

module.exports = {
  extends: isESM() ? './esm' : './commonjs'
}
