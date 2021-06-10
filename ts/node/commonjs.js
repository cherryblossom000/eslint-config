'use strict'

module.exports = {
  extends: ['../../js/node/commonjs', '../../_mixins/ts/node', '..'],
  rules: {
    // TS requires the json extension
    'import/extensions': [1, 'never', {json: 'always'}]
  }
}
