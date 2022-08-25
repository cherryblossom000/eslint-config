'use strict'

module.exports = {
	extends: ['./js/jest'],
	overrides: [
		{
			files: ['**/*.ts'],
			extends: ['./ts/jest']
		}
	]
}
