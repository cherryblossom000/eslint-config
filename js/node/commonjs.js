'use strict'

module.exports = {
	extends: ['..', 'plugin:node/recommended-script', '../../_mixins/node'],
	settings: {
		'import/extensions': ['js', 'cjs']
	},
	rules: {
		// Node
		'node/global-require': 2,
		'node/no-mixed-requires': 1,

		// Import
		'import/no-unresolved': [2, {commonjs: true}],
		'import/no-useless-path-segments': [
			1,
			{noUselessIndex: true, commonjs: true}
		],

		'unicorn/prefer-module': 0
	}
}
