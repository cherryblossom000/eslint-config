'use strict'

module.exports = {
	extends: ['./import'],
	rules: {
		'import/extensions': [2, 'ignorePackages', {ts: 'never', tsx: 'never'}],
		'import/no-unused-modules': [
			1,
			{missingExports: true, unusedExports: true},
		],

		// Covered by unicorn/prefer-module
		strict: 0,
		'unicorn/prefer-module': 2,
	},
}
