module.exports = {
	extends: '../js/jsdoc',
	settings: {jsdoc: {mode: 'typescript'}},
	rules: {
		'jsdoc/no-types': 1,
		'jsdoc/require-param-type': 0,
		'jsdoc/require-returns-type': 0,
	},
}
