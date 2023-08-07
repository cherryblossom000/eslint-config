'use strict'

module.exports = {
	plugins: ['functional'],
	extends: [
		'plugin:functional/strict',
		'plugin:functional/external-typescript-recommended',
	],
	rules: {
		'functional/no-conditional-statements': [
			2,
			{allowReturningBranches: 'ifExhaustive'},
		],
		'functional/no-promise-reject': 2,
		'unicorn/no-array-for-each': 0,
	},
}
