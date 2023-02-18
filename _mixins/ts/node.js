'use strict'

module.exports = {
	extends: ['../node', './import'],
	settings: {
		node: {
			tryExtensions: ['.js', '.json', '.ts'],
		},
	},
	rules: {
		// Already checked by TS
		'node/no-missing-import': 0,
		'node/process-exit-as-throw': 0,
		// Already checked by @typescript-eslint/no-require-imports
		'node/global-require': 0,

		// Compiled by TS
		'node/no-unsupported-features/es-syntax': 0,
	},
}
