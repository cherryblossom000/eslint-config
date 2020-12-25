'use strict'

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended'
    // Don't extend unicorn's recommended config because it sets the env and parserOptions
    // Don't extend prettier's recommended config because it sets it to error
  ],
  plugins: ['prettier', 'unicorn'],
  rules: {
    // Possible Errors
    'no-await-in-loop': 2,
    'no-cond-assign': 0,
    'no-constant-condition': [2, {checkLoops: false}],
    'no-empty': [1, {allowEmptyCatch: true}],
    // Prettier
    'no-extra-semi': 0,
    'no-inner-declarations': [2, 'both'],
    'no-irregular-whitespace': [2, {skipComments: false}],
    'no-loss-of-precision': 2,
    'no-promise-executor-return': 2,
    'no-template-curly-in-string': 1,
    'no-unsafe-negation': [2, {enforceForOrderingRelations: true}],
    'no-unsafe-optional-chaining': [2, {disallowArithmeticOperators: true}],
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
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-wrappers': 2,
    'no-nonoctal-decimal-escape': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-redeclare': [2, {builtinGlobals: true}],
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [
      1,
      {allowTernary: true, allowTaggedTemplates: true}
    ],
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
    yoda: 1,

    // Strict Mode
    strict: 2,

    // Variables
    'no-label-var': 1,
    'no-shadow': [2, {builtinGlobals: true}],
    'no-undef-init': 2,
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-use-before-define': [2, 'nofunc'],

    // Stylistic Issues
    camelcase: [1, {ignoreGlobals: true}],
    'func-name-matching': [1, {considerPropertyDescriptor: true}],
    'func-names': [1, 'as-needed'],
    'func-style': 1,
    'id-length': [1, {min: 1, max: 30}],
    'lines-between-class-members': [1, 'always', {exceptAfterSingleLine: true}],
    'max-depth': 1,
    'max-lines': [1, {max: 500, skipBlankLines: true, skipComments: true}],
    'max-lines-per-function': [
      1,
      {max: 200, skipBlankLines: true, skipComments: true}
    ],
    'max-nested-callbacks': 1,
    'max-params': [1, {max: 5}],
    'max-statements': [1, 20, {ignoreTopLevelFunctions: true}],
    'max-statements-per-line': 1,
    'new-cap': [
      1,
      {
        capIsNewExceptions: [
          'AsyncFunction',
          'GeneratorFunction',
          'AsyncGeneratorFunction'
        ]
      }
    ],
    'no-array-constructor': 1,
    'no-lonely-if': 1,
    // Prettier
    'no-mixed-spaces-and-tabs': 0,
    'no-multi-assign': 2,
    'no-negated-condition': 1,
    'no-new-object': 1,
    'no-restricted-syntax': [
      2,
      // https://github.com/prettier/eslint-config-prettier#no-sequences
      {
        selector: 'SequenceExpression',
        message: 'Unexpected use of comma operator.'
      },
      {
        selector:
          'ForInStatement:not(:has(ReturnStatement)):not(:has(BreakStatement))',
        message: 'Use Object.keys(object).forEach instead.'
      },
      {
        selector:
          'ForOfStatement[await=false]:not(:has(ReturnStatement)):not(:has(BreakStatement))',
        message: 'Use forEach instead.'
      }
    ],
    'no-unneeded-ternary': [2, {defaultAssignment: false}],
    'one-var': [1, {initialized: 'never'}],
    'operator-assignment': 1,
    'padding-line-between-statements': [
      1,
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'never', prev: 'directive', next: 'directive'},
      {blankLine: 'always', prev: ['cjs-import', 'import'], next: '*'},
      {
        blankLine: 'never',
        prev: ['cjs-import', 'import'],
        next: ['cjs-import', 'import']
      },
      {blankLine: 'always', prev: ['cjs-export', 'export'], next: '*'},
      {
        blankLine: 'any',
        prev: ['cjs-export', 'export'],
        next: ['cjs-export', 'export']
      },
      {blankLine: 'always', prev: 'function', next: '*'}
    ],
    'prefer-exponentiation-operator': 1,
    'prefer-object-spread': 1,
    quotes: [1, 'single', {avoidEscape: true}],
    'spaced-comment': [
      1,
      'always',
      {line: {markers: ['/']}, block: {markers: ['*'], balanced: true}}
    ],

    // ECMAScript 6
    // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    // Don't use --fix too much anyway
    'arrow-body-style': 1,
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
    'symbol-description': 2,

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
    'jsdoc/require-throws': 1,

    // Prettier
    'prettier/prettier': 1,

    // Promise
    // then can be used for side effects
    'promise/always-return': 0,
    'promise/catch-or-return': [2, {allowFinally: true}],
    'promise/param-names': 1,
    'promise/prefer-await-to-then': 2,
    'promise/prefer-await-to-callbacks': 2,
    'promise/valid-params': 2,

    // Unicorn
    'unicorn/better-regex': 1,
    'unicorn/catch-error-name': 1,
    'unicorn/consistent-function-scoping': 1,
    'unicorn/custom-error-definition': 2,
    'unicorn/error-message': 1,
    'unicorn/escape-case': 1,
    'unicorn/expiring-todo-comments': 1,
    'unicorn/new-for-builtins': 1,
    'unicorn/no-array-instanceof': 2,
    'unicorn/no-console-spaces': 1,
    'unicorn/no-for-loop': 2,
    'unicorn/no-hex-escape': 1,
    'unicorn/no-unsafe-regex': 2,
    'unicorn/no-unused-properties': 1,
    'unicorn/no-useless-undefined': 1,
    'unicorn/no-zero-fractions': 1,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-flat-map': 2,
    'unicorn/prefer-includes': 1,
    'unicorn/prefer-math-trunc': 2,
    'unicorn/prefer-negative-index': 2,
    'unicorn/prefer-optional-catch-binding': 1,
    'unicorn/prefer-reflect-apply': 2,
    // TODO: uncomment when replaceAll gets into Node
    // 'unicorn/prefer-replace-all': 2,
    'unicorn/prefer-set-has': 2,
    'unicorn/prefer-spread': 1,
    'unicorn/prefer-starts-ends-with': 1,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-trim-start-end': 1,
    'unicorn/prefer-type-error': 2
  }
}
