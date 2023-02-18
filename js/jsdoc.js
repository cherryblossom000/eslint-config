module.exports = {
	rules: {
		// Can't disable new line at end of 'file' for Prettier
		// https://github.com/prettier/prettier/issues/6360
		// Also https://github.com/eslint/eslint/issues/14745
		/* 'jsdoc/check-examples': [
      1,
      {
        exampleCodeRegex: '/^\\s*```(?:js|ts)\\n([\\s\\S]*)\\n```s*$/ug',
        matchingFileName: 'dummy.md/*.js'
      }
    ], */
		'jsdoc/check-indentation': 1,
		'jsdoc/check-param-names': [1, {checkDestructured: false}],
		'jsdoc/check-syntax': 1,
		'jsdoc/match-description': [
			1,
			{matchDescription: '^([A-Z]|[`\\d_{])[\\s\\S]*[.?!`]\\s*$'},
		],
		'jsdoc/multiline-blocks': 0,
		'jsdoc/no-multi-asterisks': [1, {allowWhitespace: true}],
		'jsdoc/require-description': 1,
		'jsdoc/require-description-complete-sentence': 1,
		'jsdoc/require-hyphen-before-param-description': [1, 'never'],
		'jsdoc/require-param': [1, {checkDestructured: false}],
		'jsdoc/require-throws': 1,
		'jsdoc/require-yields': 1,
		'jsdoc/require-yields-check': [1, {checkGeneratorsOnly: true}],
		'jsdoc/sort-tags': 1,
		'jsdoc/tag-lines': 1,
	},
}
