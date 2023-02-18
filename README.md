# @cherryblossom/eslint-config

![CI](https://github.com/cherryblossom000/eslint-config/workflows/CI/badge.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

@cherryblossom000’s ESLint configuration.

## ⚠️ Warning

This isn't intended for anyone else except for me. Things ~~may~~ *will* break
frequently.

Additionally, the `node`, `js/node`, and `ts/node` configs might not work
correctly if you run `eslint` in a working directory with a `package.json`
different to the `package.json` of the files being linted. To fix this,
explicitly extend either the `commonjs` or `esm` variant.

## Versioning

This does not follow semantic versioning strictly.

- A new major version will generally only be released when a peer dependency
  needs to be upgraded.
- New rules can be enabled in minor releases.
- The severity and options of rules can change in patch releases.
- Because `reportUnusedDisableDirectives` is enabled, any change that disables
  rules or make them report less can cause linting to fail.

## Configs

> `config name` (required plugin/peer dependencies)

- All of these require the following ESLint plugins:
  - eslint-comments
  - unicorn
  - prettier
    - the `prettier` package
- For `browser`, `js/browser`, and `ts/browser`, you can optionally install eslint-plugin-html to lint JS in HTML.

<!-- -->

- `index` (@typescript-eslint)
- `browser` (import, compat, @typescript-eslint)
- `node`: all of the following require import, node, and @typescript-eslint
  - `index`
  - `commonjs`
  - `esm`
- `markdown` (markdown)
- `js`
  - `index`
  - `browser` (import, compat)
  - `node`: all of the following require import and node
    - `index`
    - `commonjs`
    - `esm`
- `ts`: all of the following require @typescript-eslint
  - `index`
  - `browser` (import, compat)
  - `node`: all of the following require import and node
    - `index`
    - `commonjs`
    - `esm`

There are some additional configs that are meant to be used in conjunction with
another one:

- `node/14`: Node.js 14
- `node/16`: Node.js 16
- `js/jsdoc`: Lint JSDoc comments in JavaScript files (jsdoc)
- `ts/jsdoc`: Lint JSDoc comments in TypeScript files (jsdoc)

## License

[MIT](LICENSE) © 2020–2021 cherryblossom000
