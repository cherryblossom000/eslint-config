'use strict'

const {rules} = require('../js')

module.exports = {
  extends: [
    '../js',
    './_import',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  env: {es2020: true},
  parser: '@typescript-eslint/parser',
  parserOptions: {project: './tsconfig.json'},
  settings: {jsdoc: {mode: 'typescript'}},
  overrides: [{
    files: ['tests/**/*.test.ts'],
    env: {jest: true}
  }],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 1,
    '@typescript-eslint/array-type': 1,
    '@typescript-eslint/ban-ts-comment': [2, {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description'
    }],
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/class-literal-property-style': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-definitions': [1, 'interface'],
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-member-accessibility': [1, {accessibility: 'no-public'}],
    '@typescript-eslint/member-delimiter-style': [1, {
      singleline: {delimiter: 'comma'},
      multiline: {delimiter: 'none'}
    }],
    '@typescript-eslint/member-ordering': 1,
    camelcase: 0,
    '@typescript-eslint/naming-convention': [1,
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      }
    ],
    '@typescript-eslint/no-base-to-string': 2,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extraneous-class': 2,
    'no-implied-eval': 0,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-misused-promises': [2, {checksVoidReturn: false}],
    '@typescript-eslint/no-namespace': [2, {allowDeclarations: true}],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': 2,
    'no-throw-literal': 0,
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-condition': [2, {allowConstantLoopConditions: true}],
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 1,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/strict-boolean-expressions': 2,
    '@typescript-eslint/type-annotation-spacing': 1,
    '@typescript-eslint/unbound-method': [2, {ignoreStatic: true}],
    '@typescript-eslint/unified-signatures': 2,

    // Extension Rules
    'brace-style': 0,
    '@typescript-eslint/brace-style': rules['brace-style'],
    'comma-spacing': 0,
    '@typescript-eslint/comma-spacing': rules['comma-spacing'],
    'func-call-spacing': 0,
    '@typescript-eslint/func-call-spacing': rules['func-call-spacing'],
    indent: 0,
    '@typescript-eslint/indent': rules.indent,
    'lines-between-class-members': 0,
    '@typescript-eslint/lines-between-class-members': rules['lines-between-class-members'],
    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': rules['no-array-constructor'],
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': [rules['no-empty-function'], {
      allow: ['protected-constructors', 'private-constructors']
    }],
    'no-extra-parens': 0,
    '@typescript-eslint/no-extra-parens': rules['no-extra-parens'],
    'no-extra-semi': 0,
    '@typescript-eslint/no-extra-semi': rules['no-extra-semi'],
    'no-loss-of-precision': 0,
    '@typescript-eslint/no-loss-of-precision': rules['no-loss-of-precision'],
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': rules['no-unused-expressions'],
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': rules['no-useless-constructor'],
    quotes: 0,
    '@typescript-eslint/quotes': rules.quotes,
    'require-await': 0,
    '@typescript-eslint/require-await': rules['require-await'],
    'no-return-await': 0,
    '@typescript-eslint/return-await': rules['no-return-await'],
    semi: 0,
    '@typescript-eslint/semi': rules.semi,
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': rules['space-before-function-paren'],

    // JSDoc
    'jsdoc/no-types': 1,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,

    // Already checked by TS
    'array-callback-return': 0,
    'consistent-return': 0,
    'default-param-last': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'node/no-missing-import': 0,

    // Doesn't work for class fields
    'no-invalid-this': 0
  }
}
