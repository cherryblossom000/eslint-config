'use strict'

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsdoc/recommended'
  ],
  plugins: [
    'eslint-comments',
    'jsdoc'
  ],
  rules: {
    // Possible Errors
    'no-await-in-loop': 2,
    'no-extra-parens': 1,
    'no-cond-assign': 0,
    'no-constant-condition': [2, {checkLoops: false}],
    'no-empty': [1, {allowEmptyCatch: true}],
    'no-extra-semi': 1,
    'no-inner-declarations': [2, 'both'],
    'no-irregular-whitespace': [2, {skipComments: false}],
    'no-loss-of-precision': 2,
    'no-promise-executor-return': 2,
    'no-template-curly-in-string': 1,
    'no-unsafe-negation': [2, {enforceForOrderingRelations: true}],
    'no-unreachable-loop': 2,
    'no-useless-backreference': 2,
    'require-atomic-updates': 2,
    'use-isnan': [2, {enforceForSwitchCase: true, enforceForIndexOf: true}],

    // Best Practices
    'accessor-pairs': [1, {enforceForClassMembers: true}],
    'array-callback-return': 2,
    'class-methods-use-this': 2,
    complexity: 1,
    'consistent-return': 2,
    curly: [1, 'multi-or-nest'],
    'default-case-last': 2,
    'default-param-last': 2,
    'dot-location': [1, 'property'],
    'dot-notation': 1,
    eqeqeq: [2, 'smart'],
    'grouped-accessor-pairs': [1, 'getBeforeSet'],
    'guard-for-in': 2,
    'no-caller': 2,
    'no-constructor-return': 2,
    'no-else-return': [1, {allowElseIf: false}],
    'no-empty-function': 1,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 1,
    'no-fallthrough': 0,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': [2, {allowLoop: true, allowSwitch: true}],
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': [1, {}],
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [1, {allowTernary: true, allowTaggedTemplates: true}],
    'no-unused-labels': 1,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 1,
    'no-void': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-regex-literals': 2,
    radix: [1, 'as-needed'],
    'require-await': 2,
    'require-unicode-regexp': 2,
    'vars-on-top': 2,
    'wrap-iife': [1, 'inside'],
    yoda: 1,

    // Strict Mode
    strict: 2,

    // Variables
    'no-label-var': 1,
    'no-shadow': [2, {builtinGlobals: true}],
    'no-undef-init': 2,
    'no-unused-vars': [1, {
      ignoreRestSiblings: true,
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_'
    }],
    'no-use-before-define': [2, 'nofunc'],

    // Stylistic Issues
    'array-bracket-newline': [1, 'consistent'],
    'array-bracket-spacing': 1,
    'array-element-newline': [1, 'consistent'],
    'block-spacing': 1,
    'brace-style': 1,
    camelcase: 1,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': [1, 'never', {enforceForClassMembers: true}],
    'eol-last': 1,
    'func-call-spacing': 1,
    'func-name-matching': [1, {considerPropertyDescriptor: true}],
    'func-names': [1, 'as-needed'],
    'func-style': 1,
    'function-call-argument-newline': [1, 'consistent'],
    'id-length': [1, {min: 1, max: 30}],
    indent: [1, 2, {SwitchCase: 1, flatTernaryExpressions: true}],
    'key-spacing': 1,
    'keyword-spacing': 1,
    'lines-between-class-members': [1, 'always', {exceptAfterSingleLine: true}],
    'line-comment-position': [1, {position: 'above', applyDefaultIgnorePatterns: false}],
    'linebreak-style': 1,
    'max-depth': 1,
    'max-len': [1, {code: 125, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true}],
    'max-lines': [1, {max: 500, skipBlankLines: true, skipComments: true}],
    'max-lines-per-function': [1, {max: 100, skipBlankLines: true, skipComments: true}],
    'max-nested-callbacks': 1,
    'max-params': [1, {max: 5}],
    'max-statements': [1, 20, {ignoreTopLevelFunctions: true}],
    'max-statements-per-line': 1,
    'new-cap': [1, {capIsNewExceptions: ['AsyncFunction', 'GeneratorFunction', 'AsyncGeneratorFunction']}],
    'new-parens': 1,
    'newline-per-chained-call': [1, {ignoreChainWithDepth: 4}],
    'no-array-constructor': 1,
    'no-lonely-if': 1,
    'no-multi-assign': 2,
    'no-multiple-empty-lines': [1, {max: 1, maxBOF: 0, maxEOF: 0}],
    'no-negated-condition': 1,
    'no-new-object': 1,
    'no-restricted-syntax': [2,
      {
        selector: 'ForInStatement:not(:has(ReturnStatement)):not(:has(BreakStatement))',
        message: 'Use Object.keys(object).forEach instead.'
      },
      {
        selector: 'ForOfStatement[await=false]:not(:has(ReturnStatement)):not(:has(BreakStatement))',
        message: 'Use forEach instead.'
      }
    ],
    'no-tabs': 1,
    'no-trailing-spaces': 1,
    'no-unneeded-ternary': [2, {defaultAssignment: false}],
    'no-whitespace-before-property': 1,
    'object-curly-newline': 1,
    'object-curly-spacing': 1,
    'object-property-newline': [1, {allowAllPropertiesOnSameLine: true}],
    'one-var': [1, {initialized: 'never'}],
    'one-var-declaration-per-line': 1,
    'operator-assignment': 1,
    'operator-linebreak': [1, 'after', {overrides: {'?': 'before', ':': 'before', '|>': 'before'}}],
    'padded-blocks': [1, 'never'],
    'padding-line-between-statements': [1,
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'never', prev: 'directive', next: 'directive'},
      {blankLine: 'always', prev: ['cjs-import', 'import'], next: '*'},
      {blankLine: 'never', prev: ['cjs-import', 'import'], next: ['cjs-import', 'import']},
      {blankLine: 'always', prev: ['cjs-export', 'export'], next: '*'},
      {blankLine: 'any', prev: ['cjs-export', 'export'], next: ['cjs-export', 'export']},
      {blankLine: 'always', prev: 'function', next: '*'}
    ],
    'prefer-exponentiation-operator': 1,
    'prefer-object-spread': 1,
    'quote-props': [1, 'as-needed'],
    quotes: [1, 'single', {avoidEscape: true}],
    semi: [1, 'never'],
    'semi-spacing': 1,
    'semi-style': [1, 'first'],
    'space-before-blocks': 1,
    'space-before-function-paren': [1, {named: 'never'}],
    'space-in-parens': 1,
    'space-infix-ops': [1, {int32Hint: true}],
    'space-unary-ops': [1, {words: true, nonwords: false}],
    'spaced-comment': [1, 'always', {line: {markers: ['/']}, block: {markers: ['*'], balanced: true}}],
    'switch-colon-spacing': 1,
    'template-tag-spacing': 1,
    'unicode-bom': 1,

    // ECMAScript 6
    'arrow-body-style': 1,
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'generator-star-spacing': [1, {before: false, after: true, method: 'before'}],
    'no-useless-computed-key': [1, {enforceForClassMembers: true}],
    'no-useless-constructor': 1,
    'no-useless-rename': 1,
    'no-var': 2,
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-const': 2,
    'prefer-destructuring': 1,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'rest-spread-spacing': 1,
    'symbol-description': 2,
    'template-curly-spacing': 1,
    'yield-star-spacing': 1,

    // ESLint Comments
    'eslint-comments/require-description': 1,

    // JSDoc
    // 'jsdoc/check-examples': 1,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-param-names': [1, {checkRestProperty: true}],
    'jsdoc/check-syntax': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-hyphen-before-param-description': [1, 'never'],
    'jsdoc/require-param': [1, {checkRestProperty: true}],
    'jsdoc/require-throws': 1
  }
}
