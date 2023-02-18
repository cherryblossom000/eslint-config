'use strict'

const {isESM} = require('../../src/utils')

module.exports = {
	extends: isESM() ? './esm' : './commonjs',
	overrides: [
		{files: ['*.cjs', '.*.cjs'], extends: ['./commonjs']},
		{files: ['*.mjs', '.*.mjs'], extends: ['./esm']},
	],
}
