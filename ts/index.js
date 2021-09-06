'use strict'

const {rules} = require('../js')

module.exports = {
  extends: [
    '../js',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '../_mixins/ts/import'
  ],
  env: {es2020: true},
  parser: '@typescript-eslint/parser',
  settings: {jsdoc: {mode: 'typescript'}},
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-unused-modules': 0
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
    '@typescript-eslint/ban-types': [
      2,
      // defaults except object
      // https://github.com/typescript-eslint/typescript-eslint/blob/v4.30.0/packages/eslint-plugin/src/rules/ban-types.ts#L56-L105
      {
        String: {
          message: 'Use string instead',
          fixWith: 'string'
        },
        Boolean: {
          message: 'Use boolean instead',
          fixWith: 'boolean'
        },
        Number: {
          message: 'Use number instead',
          fixWith: 'number'
        },
        Symbol: {
          message: 'Use symbol instead',
          fixWith: 'symbol'
        },
        Function: {
          message: [
            'The `Function` type accepts any function-like value.',
            'It provides no type safety when calling the function, which can be a common source of bugs.',
            'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
            'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
          ].join('\n')
        },

        Object: {
          message: [
            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.'
          ].join('\n')
        },
        '{}': {
          message: [
            '`{}` actually means "any non-nullish value".',
            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
            '- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.'
          ].join('\n')
        }
      }
    ],
    '@typescript-eslint/class-literal-property-style': 2,
    '@typescript-eslint/consistent-indexed-object-style': 1,
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
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'variableLike',
        modifiers: ['unused'],
        filter: '^_+$',
        format: null
      },
      {
        selector: 'variableLike',
        modifiers: ['unused'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'property',
        modifiers: ['requiresQuotes'],
        format: null
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble', // _id, __typename, etc.
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      }
    ],
    '@typescript-eslint/no-base-to-string': 2,
    '@typescript-eslint/no-confusing-void-expression': [
      2,
      {ignoreArrowShorthand: true}
    ],
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-explicit-any': 2,
    'unicorn/no-static-only-class': 0,
    '@typescript-eslint/no-extraneous-class': 2,
    // Covered by no-floating-promises
    'promise/catch-or-return': 0,
    'no-implied-eval': 0,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-misused-promises': [2, {checksVoidReturn: false}],
    '@typescript-eslint/no-namespace': [2, {allowDeclarations: true}],
    '@typescript-eslint/no-non-null-assertion': 0,
    'unicorn/no-this-assignment': 0,
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
    '@typescript-eslint/no-unnecessary-type-constraint': 1,
    '@typescript-eslint/no-unsafe-argument': 2,
    '@typescript-eslint/non-nullable-type-assertion-style': 1,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    'unicorn/prefer-includes': 0,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly': 2,
    'unicorn/prefer-string-starts-ends-with': 0,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/require-array-sort-compare': [
      1,
      {ignoreStringArrays: true}
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 1,
    '@typescript-eslint/strict-boolean-expressions': 2,
    '@typescript-eslint/unbound-method': [2, {ignoreStatic: true}],
    '@typescript-eslint/unified-signatures': 2,

    // Extension Rules
    'dot-notation': 0,
    '@typescript-eslint/dot-notation': [
      rules['dot-notation'],
      {
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true
      }
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
    'no-loop-func': 0,
    '@typescript-eslint/no-loop-func': rules['no-loop-func'],
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
    'no-unsafe-optional-chaining': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'promise/no-new-static': 0,
    'promise/valid-params': 0,

    // Doesn't work for class fields
    'no-invalid-this': 0,
    // TypeScript can't resolve node: paths
    'unicorn/prefer-node-protocol': 0
  }
}
