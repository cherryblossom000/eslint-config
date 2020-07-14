# @cherryblossom/eslint-config

![CI](https://github.com/cherryblossom000/eslint-config/workflows/CI/badge.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

@cherryblossom000's ESLint configuration.

## Configs

> `config name` (requires plugin/peer dependency 1, plugin 2)

- All of these require the following ESLint plugins:
  - eslint-comments
  - jsdoc
  - unicorn
  - promise
- For `browser`, `js/browser`, and `ts/browser`, you can optionally install eslint-plugin-html to lint JS in HTML.

<!-- -->

- `index` (@typescript-eslint)
- `browser` (import, compat, @typescript-eslint)
- `react` (import, compat, react-hooks, @typescript-eslint)
- `node` (import, node, @typescript-eslint)
- `jest` (jest, @typescript-eslint)
- `markdown` (markdown)
- `js`
  - `index`
  - `browser` (import, compat)
  - `node` (import, node)
  - `jest` (jest)
  - `react` (import, compat, react-hooks)
- `ts`: all of the following require @typescript-eslint
  - `index`
  - `browser` (import, compat)
  - `react` (import, compat, react-hooks)
  - `node` (import, node)
  - `jest` (jest)

## License

[MIT](LICENSE) (c) 2020 cherryblossom000
