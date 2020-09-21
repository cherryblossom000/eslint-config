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
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-unused-modules': 0,
        'import/prefer-default-export': 0
      }
    }
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 1,
    '@typescript-eslint/array-type': 1,
    '@typescript-eslint/ban-ts-comment': [
      2,
      {
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description'
      }
    ],
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/class-literal-property-style': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-imports': 1,
    '@typescript-eslint/consistent-type-definitions': [1, 'interface'],
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-member-accessibility': [
      1,
      {accessibility: 'no-public'}
    ],
    '@typescript-eslint/member-ordering': 1,
    camelcase: 0,
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'variable',
        modifiers: ['const'],
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
    // Covered by no-floating-promises
    'promise/catch-or-return': 0,
    'no-implied-eval': 0,
    '@typescript-eslint/no-implicit-any-catch': 2,
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
    '@typescript-eslint/no-unnecessary-condition': [
      2,
      {allowConstantLoopConditions: true}
    ],
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 1,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly': 2,
    'unicorn/prefer-starts-ends-with': 0,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/strict-boolean-expressions': 2,
    '@typescript-eslint/unbound-method': [2, {ignoreStatic: true}],
    '@typescript-eslint/unified-signatures': 2,

    // Extension Rules
    'dot-notation': 0,
    '@typescript-eslint/dot-notation': [
      rules['dot-notation'],
      {allowPrivateClassPropertyAccess: true}
    ],
    'lines-between-class-members': 0,
    '@typescript-eslint/lines-between-class-members':
      rules['lines-between-class-members'],
    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': rules['no-array-constructor'],
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': [
      rules['no-empty-function'],
      {
        allow: [
          'protected-constructors',
          'private-constructors',
          'decoratedFunctions'
        ]
      }
    ],
    'no-extra-semi': 0,
    '@typescript-eslint/no-extra-semi': rules['no-extra-semi'],
    'no-loss-of-precision': 0,
    '@typescript-eslint/no-loss-of-precision': rules['no-loss-of-precision'],
    'no-redeclare': 0,
    '@typescript-eslint/no-redeclare': rules['no-redeclare'],
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': rules['no-shadow'],
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': rules['no-unused-expressions'],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [
      rules['no-use-before-define'][0],
      {functions: false, ignoreTypeReferences: false}
    ],
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor':
      rules['no-useless-constructor'],
    quotes: 0,
    '@typescript-eslint/quotes': rules.quotes,
    'require-await': 0,
    '@typescript-eslint/require-await': rules['require-await'],
    'no-return-await': 0,
    '@typescript-eslint/return-await': rules['no-return-await'],

    // JSDoc
    'jsdoc/no-types': 1,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,

    // Already checked by TS
    'array-callback-return': 0,
    'consistent-return': 0,
    'default-param-last': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'promise/no-new-static': 0,
    'promise/valid-params': 0,

    // Doesn't work for class fields
    'no-invalid-this': 0
  }
}
