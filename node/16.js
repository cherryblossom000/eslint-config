'use strict'

module.exports = {
	extends: ['../_mixins/es/2021', '../_mixins/es/2022'],
	env: {es2021: true},
	parserOptions: {ecmaVersion: 2022},
	rules: {
		'unicorn/prefer-node-protocol': 1,
	},
}
