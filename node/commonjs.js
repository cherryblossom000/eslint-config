'use strict'

module.exports = {
	extends: ['../js/node/commonjs'],
	overrides: [
		{
			files: ['**/*.ts'],
			extends: ['../ts/node/commonjs']
		}
	]
}
