'use strict'

module.exports = {
	extends: [
		'..',
		'../../_mixins/node',
		'../../_mixins/esm',
		'plugin:node/recommended-module'
	],
	settings: {
		'import/extensions': ['js', 'mjs']
	},
	rules: {
		'import/no-extraneous-dependencies': 2
	}
}
