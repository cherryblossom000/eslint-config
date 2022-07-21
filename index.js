'use strict'

module.exports = {
	extends: ['./js'],
	overrides: [
		{
			files: ['**/*.ts'],
			extends: ['./ts']
		}
	]
}
