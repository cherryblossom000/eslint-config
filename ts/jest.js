'use strict'

const {rules} = require('.')

module.exports = {
	extends: '../js/jest',
	rules: {
		'@typescript-eslint/unbound-method': 0,
		'jest/unbound-method': rules['@typescript-eslint/unbound-method']
	}
}
