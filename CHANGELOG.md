# Changelog

# [12.0.0](https://github.com/cherryblossom000/eslint-config/compare/v11.1.0...v12.0.0) (2020-11-21)


### Features

* **ts:** make typescript a peer dependency ([81771da](https://github.com/cherryblossom000/eslint-config/commit/81771dacc55cdadba6a95a7d782b711f60e88dd4))
* add `no-nonoctal-decimal-escape` ([97925ff](https://github.com/cherryblossom000/eslint-config/commit/97925ff73cf0978b5cd9a26ecbebd2ccc4a44b4b))
* **ts:** add `@typescript-eslint/no-confusing-void-expression` ([ed523dd](https://github.com/cherryblossom000/eslint-config/commit/ed523dde7adf13693ab6a63198661a1424f4a40a))
* **ts:** add `@typescript-eslint/no-unnecessary-type-constraint` ([7fb1e5a](https://github.com/cherryblossom000/eslint-config/commit/7fb1e5af5af808f98fe762b8955c2600e8c27fb6))


### BREAKING CHANGES

* Requires `eslint@^7.14`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.7`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.6`.

# [11.1.0](https://github.com/cherryblossom000/eslint-config/compare/v11.0.1...v11.1.0) (2020-10-31)


### Bug Fixes

* **ts:** remove `prefer-readonly-parameter-types` ([a29d77a](https://github.com/cherryblossom000/eslint-config/commit/a29d77a4f61343f30f470332ae6601f0e6437dee))


### Features

* **ts:** add `require-array-sort-compare` ([6b7bbcf](https://github.com/cherryblossom000/eslint-config/commit/6b7bbcf7f49447e4aa97e6fe220c4fb798c59fe8))
* **ts:** enable `no-explicit-any` ([2f449e3](https://github.com/cherryblossom000/eslint-config/commit/2f449e380542a41c9c8c9a2994f57989c560b07e))

## [11.0.1](https://github.com/cherryblossom000/eslint-config/compare/v11.0.0...v11.0.1) (2020-10-28)


### Bug Fixes

* **ts/jest:** fix config ([5cecca3](https://github.com/cherryblossom000/eslint-config/commit/5cecca3ea02c4c2d0b604f8b65a9b958a1dd9afd))

# [11.0.0](https://github.com/cherryblossom000/eslint-config/compare/v10.0.0...v11.0.0) (2020-10-25)


### Bug Fixes

* **ts:** ignore function type parameter names in `@typescript-eslint/no-shadow` ([27aa091](https://github.com/cherryblossom000/eslint-config/commit/27aa091e608af9fcd224646fcce54f1016759cb5))


### Features

* **jest:** drop support for `eslint-plugin-jest@23` ([11a6356](https://github.com/cherryblossom000/eslint-config/commit/11a63560009025ae1923fa0cbd2adbed3f77f592))
* **ts:** add `@typescript-eslint/consistent-indexed-object-style` ([e54ad57](https://github.com/cherryblossom000/eslint-config/commit/e54ad573d09c43dec1efc2600007ec31371237e3))
* **ts:** add `@typescript-eslint/prefer-readonly-parameter-types` ([f7af986](https://github.com/cherryblossom000/eslint-config/commit/f7af986b3497c3b8196439780fed126ca18d76cd))
* **ts:** allow protected property access for `dot-notation` ([e0839d1](https://github.com/cherryblossom000/eslint-config/commit/e0839d181560945cd472e97a39de9bead035a9cb))
* add `unicorn/prefer-math-trunc` and `unicorn/numeric-separators-style` ([42cef6d](https://github.com/cherryblossom000/eslint-config/commit/42cef6d274b1dab3ac42be4fa527ca5b93e6c077))


### BREAKING CHANGES

* **jest:** Requires `eslint-plugin-jest@^24`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.5.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.4`.
* Requires `eslint-plugin-unicorn@^23`.

# [10.0.0](https://github.com/cherryblossom000/eslint-config/compare/v9.0.0...v10.0.0) (2020-09-21)


### Features

* **ts:** add `no-loop-func` extension rule and don't ignore function type parameter name shadow ([ac1aa6d](https://github.com/cherryblossom000/eslint-config/commit/ac1aa6d086ae5b0f61174b509e4c267f3bed581b))


### BREAKING CHANGES

* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.1`.

# [9.0.0](https://github.com/cherryblossom000/eslint-config/compare/v8.0.1...v9.0.0) (2020-09-21)


### Bug Fixes

* check for builtin globals in `no-redeclare` ([6c8231c](https://github.com/cherryblossom000/eslint-config/commit/6c8231cd1a468dad9fc87f6b211999371c270b22))
* support `eslint-plugin-unicorn@22` ([eba0912](https://github.com/cherryblossom000/eslint-config/commit/eba0912101e4ecf19bd97d954ffe52c6e664c54e))


### Features

* **ts:** add `consistent-type-imports` ([b74e272](https://github.com/cherryblossom000/eslint-config/commit/b74e272af0f09f536867215adcd8dc557d707bb7))
* **ts:** add `dot-notation`, `no-redeclare`, `no-shadow` and `no-use-before-define` extension rules ([cc7d738](https://github.com/cherryblossom000/eslint-config/commit/cc7d7385f71f9789710ecaa2c39c303a4d37eef6))


### BREAKING CHANGES

* **ts:** Adding a new rule. Requires `@typescript-eslint/eslint-plugin@^4`.

## [8.0.1](https://github.com/cherryblossom000/eslint-config/compare/v8.0.0...v8.0.1) (2020-08-25)


### Bug Fixes

* **ts:** upgrade to `@typescript-eslint/parser@3.10.1` ([5976bb1](https://github.com/cherryblossom000/eslint-config/commit/5976bb13a51e515b9dd81cbb4ffee0ed818286a9))

# [8.0.0](https://github.com/cherryblossom000/eslint-config/compare/v7.0.1...v8.0.0) (2020-08-24)


### Features

* ignore globals for `camelcase` ([5494ed9](https://github.com/cherryblossom000/eslint-config/commit/5494ed98ec06dfd558b0f6a6500745fd78e04404))
* **ts:** upgrade [@typesript-eslint](https://github.com/typesript-eslint) ([3871481](https://github.com/cherryblossom000/eslint-config/commit/387148159c0b7a119d3f8f9fe09e7934d1494c58))


### BREAKING CHANGES

* Requires `eslint@^7.4`.
* **ts:** Disallows UPPER_CASE non-`const` variables; requires `@typescript-eslint/eslint-plugin@^3.10` and `typescript@^4`.

## [7.0.1](https://github.com/cherryblossom000/eslint-config/compare/v7.0.0...v7.0.1) (2020-08-06)


### Bug Fixes

* **ts:** disable `import/no-unused-modules` and `import/prefer-default-export` in declaration files ([f037ed2](https://github.com/cherryblossom000/eslint-config/commit/f037ed2e80277985c0b5703853bfee0732d2a1dd))

# [7.0.0](https://github.com/cherryblossom000/eslint-config/compare/v6.0.3...v7.0.0) (2020-08-03)


### Features

* add `unicorn/expiring-todo-comments` and `unicorn/prefer-array-find` ([6cfc62f](https://github.com/cherryblossom000/eslint-config/commit/6cfc62fc9d0ea99cc2aea8041776697a41f40cd4))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^21`.

## [6.0.3](https://github.com/cherryblossom000/eslint-config/compare/v6.0.2...v6.0.3) (2020-07-27)


### Bug Fixes

* change `max-lines-per-function` limit to 200 ([63b701e](https://github.com/cherryblossom000/eslint-config/commit/63b701e8a96c091f49c5d14e8a87b09fc37eb73d))

## [6.0.2](https://github.com/cherryblossom000/eslint-config/compare/v6.0.1...v6.0.2) (2020-07-27)


### Bug Fixes

* remove `inline-comment-position` ([314375a](https://github.com/cherryblossom000/eslint-config/commit/314375a0ddbf04dccf240e12141ed2e42b83aefd))
* support `eslint-plugin-unicorn@21` ([156d218](https://github.com/cherryblossom000/eslint-config/commit/156d218ddab773d87cc72770eceef99229971a2e))

## [6.0.1](https://github.com/cherryblossom000/eslint-config/compare/v6.0.0...v6.0.1) (2020-07-27)


### Bug Fixes

* make `eslint-plugin-react-hooks` optional ([0abcc2b](https://github.com/cherryblossom000/eslint-config/commit/0abcc2b54a75ed4c89f2ee0ba87811a2e49017b6))

# [6.0.0](https://github.com/cherryblossom000/eslint-config/compare/v5.0.0...v6.0.0) (2020-07-27)


### Bug Fixes

* add support for eslint-plugin-jsdoc 30 ([b5b4807](https://github.com/cherryblossom000/eslint-config/commit/b5b48071f2ec0f54f67a20da8904e8e1e37223f0))
* add support for eslint-plugin-jsdoc@29 ([5b19848](https://github.com/cherryblossom000/eslint-config/commit/5b1984850deb1edf61edd553e5873c6b0dc62ade))
* allow `finally` for `promise/catch-or-return` ([085fba7](https://github.com/cherryblossom000/eslint-config/commit/085fba76e13943e469037bb2fb28f91da703b6a1))


### Features

* **use prettier:** use `eslint-plugin-prettier` ([4031933](https://github.com/cherryblossom000/eslint-config/commit/4031933b85c8ea33b757fdee74ec24d56cbeed25))


### BREAKING CHANGES

* **use prettier:** Requires `eslint-plugin-prettier` and `prettier`.

# [5.0.0](https://github.com/cherryblossom000/eslint-config/compare/v4.0.3...v5.0.0) (2020-07-27)


### Bug Fixes

* add support for eslint-plugin-jsdoc 30 ([b5b4807](https://github.com/cherryblossom000/eslint-config/commit/b5b48071f2ec0f54f67a20da8904e8e1e37223f0))
* add support for eslint-plugin-jsdoc@29 ([5b19848](https://github.com/cherryblossom000/eslint-config/commit/5b1984850deb1edf61edd553e5873c6b0dc62ade))
* allow `finally` for `promise/catch-or-return` ([085fba7](https://github.com/cherryblossom000/eslint-config/commit/085fba76e13943e469037bb2fb28f91da703b6a1))
* allow reflect-metadata for `import/no-unassigned-import` ([402e007](https://github.com/cherryblossom000/eslint-config/commit/402e0071ae9b258de7020b69b3b966ef2cb2a3f4))
* change `block-spacing` to `always` ([c3a60c6](https://github.com/cherryblossom000/eslint-config/commit/c3a60c6571453b49d6bcc2b58ae46dc1aa3e9a69))
* fix @typescript-eslint/parser and typescript dependencies ([d3df280](https://github.com/cherryblossom000/eslint-config/commit/d3df280c13fefa4accc8f7096b64b0c390f25fb7))
* **js/node:** specify import plugin ([9e14bfe](https://github.com/cherryblossom000/eslint-config/commit/9e14bfe1d2a0097b69ff157d47f36027f1a7dbb9))
* make peer deps satisfy major versions ([61b20d0](https://github.com/cherryblossom000/eslint-config/commit/61b20d00b5650906f55e23e4927f734e8ea79491))


### chore

* fix peer deps ([4952ed4](https://github.com/cherryblossom000/eslint-config/commit/4952ed430b4ec3ca484036115bfc5e3e96c93fea))


### Features

* **use prettier:** use `eslint-plugin-prettier` ([4031933](https://github.com/cherryblossom000/eslint-config/commit/4031933b85c8ea33b757fdee74ec24d56cbeed25))
* add `eslint-plugin-promise` ([430b7bb](https://github.com/cherryblossom000/eslint-config/commit/430b7bbcfb2e4a5cadcabf56a24e59acb94309d1))
* add `eslint-plugin-unicorn` ([b1eee30](https://github.com/cherryblossom000/eslint-config/commit/b1eee30b79f66e631f1b46533ae40bc1702fdec5))
* **browser:** add `eslint-plugin-compat` ([cfc6af9](https://github.com/cherryblossom000/eslint-config/commit/cfc6af9d45568a20e7edc04f747fc1f9f96a8b43))
* add `jsdoc/require-throws` ([5409d03](https://github.com/cherryblossom000/eslint-config/commit/5409d0330dd4a1237a0298084d6b34a76b17866d))
* add jest configs ([433de0a](https://github.com/cherryblossom000/eslint-config/commit/433de0a84467b20a54c10b29de59b9dc00aec19d))
* add markdown and html support ([882c2cd](https://github.com/cherryblossom000/eslint-config/commit/882c2cd4300365be452cf575b6605c40e1c98e5f))
* add react configs ([55a7797](https://github.com/cherryblossom000/eslint-config/commit/55a779766da13f572fec876d31ae0c2459728c05))
* **ts:** add `@typescript-eslint/no-loss-of-precision` ([20958aa](https://github.com/cherryblossom000/eslint-config/commit/20958aaf4595b5c6d3355d4f9eaaa1055ca28772))


### BREAKING CHANGES

* **use prettier:** Requires `eslint-plugin-prettier` and `prettier`.
* Requires `eslint-plugin-promise@^4`.
* Requires `eslint-plugin-unicorn@^20`.
* Requires `eslint-plugin-compat@^3`.
* **browser:** The `browser`, `js/browser`, `ts/browser`, `react`, `js/react`, and `ts/react`
plugins require `eslint-plugin-compat`.
* Peer dependencies need to satisfy the major versions to avoid breaking changes.
* Requires `eslint-plugin-jsdoc` to be `>=27.1` (compared to `>=25`).
* **ts:** Requires `@typescript-eslint/eslint-plugin` to be `>=3.4` (comapred to `>=3.1`).
* Blocks now need to have spaces in between the braces.

# [5.0.0-next.1](https://github.com/cherryblossom000/eslint-config/compare/v4.0.3...v5.0.0-next.1) (2020-07-14)


### Bug Fixes

* allow `finally` for `promise/catch-or-return` ([085fba7](https://github.com/cherryblossom000/eslint-config/commit/085fba76e13943e469037bb2fb28f91da703b6a1))
* fix @typescript-eslint/parser and typescript dependencies ([d3df280](https://github.com/cherryblossom000/eslint-config/commit/d3df280c13fefa4accc8f7096b64b0c390f25fb7))
* **js/node:** specify import plugin ([9e14bfe](https://github.com/cherryblossom000/eslint-config/commit/9e14bfe1d2a0097b69ff157d47f36027f1a7dbb9))
* allow reflect-metadata for `import/no-unassigned-import` ([402e007](https://github.com/cherryblossom000/eslint-config/commit/402e0071ae9b258de7020b69b3b966ef2cb2a3f4))
* change `block-spacing` to `always` ([c3a60c6](https://github.com/cherryblossom000/eslint-config/commit/c3a60c6571453b49d6bcc2b58ae46dc1aa3e9a69))
* make peer deps satisfy major versions ([61b20d0](https://github.com/cherryblossom000/eslint-config/commit/61b20d00b5650906f55e23e4927f734e8ea79491))


### chore

* fix peer deps ([4952ed4](https://github.com/cherryblossom000/eslint-config/commit/4952ed430b4ec3ca484036115bfc5e3e96c93fea))


### Features

* add `eslint-plugin-promise` ([430b7bb](https://github.com/cherryblossom000/eslint-config/commit/430b7bbcfb2e4a5cadcabf56a24e59acb94309d1))
* add `eslint-plugin-unicorn` ([b1eee30](https://github.com/cherryblossom000/eslint-config/commit/b1eee30b79f66e631f1b46533ae40bc1702fdec5))
* **browser:** add `eslint-plugin-compat` ([cfc6af9](https://github.com/cherryblossom000/eslint-config/commit/cfc6af9d45568a20e7edc04f747fc1f9f96a8b43))
* add `jsdoc/require-throws` ([5409d03](https://github.com/cherryblossom000/eslint-config/commit/5409d0330dd4a1237a0298084d6b34a76b17866d))
* add jest configs ([433de0a](https://github.com/cherryblossom000/eslint-config/commit/433de0a84467b20a54c10b29de59b9dc00aec19d))
* add markdown and html support ([882c2cd](https://github.com/cherryblossom000/eslint-config/commit/882c2cd4300365be452cf575b6605c40e1c98e5f))
* add react configs ([55a7797](https://github.com/cherryblossom000/eslint-config/commit/55a779766da13f572fec876d31ae0c2459728c05))
* **ts:** add `@typescript-eslint/no-loss-of-precision` ([20958aa](https://github.com/cherryblossom000/eslint-config/commit/20958aaf4595b5c6d3355d4f9eaaa1055ca28772))


### BREAKING CHANGES

* Requires `eslint-plugin-promise@^4`.
* Requires `eslint-plugin-unicorn@^20`.
* Requires `eslint-plugin-compat@^3`.
* **browser:** The `browser`, `js/browser`, `ts/browser`, `react`, `js/react`, and `ts/react`
plugins require `eslint-plugin-compat`.
* Peer dependencies need to satisfy the major versions to avoid breaking changes.
* Requires `eslint-plugin-jsdoc` to be `>=27.1` (compared to `>=25`).
* **ts:** Requires `@typescript-eslint/eslint-plugin` to be `>=3.4` (comapred to `>=3.1`).
* Blocks now need to have spaces in between the braces.

# [5.0.0](https://github.com/cherryblossom000/eslint-config/compare/v4.0.3...v5.0.0) (2020-07-14)


### Bug Fixes

* fix @typescript-eslint/parser and typescript dependencies ([c0263d3](https://github.com/cherryblossom000/eslint-config/commit/c0263d3f5a3777e63a7d5913fd6ec0934663322f))
* **js/node:** specify import plugin ([6b530bb](https://github.com/cherryblossom000/eslint-config/commit/6b530bbc1d0dca096a9aab926e6c88fe201a238a))
* allow reflect-metadata for `import/nounassigned-import` ([3bf6180](https://github.com/cherryblossom000/eslint-config/commit/3bf6180a48a78c496dbc2baa21b92ea3b9c9bcc9))
* change `block-spacing` to `always` ([f6ee457](https://github.com/cherryblossom000/eslint-config/commit/f6ee457d762477616169eeb5270f1ca8cf1accb3))
* make peer deps satisfy major versions ([1e2f8ac](https://github.com/cherryblossom000/eslint-config/commit/1e2f8acab780ac236e25ec4008b8d1155989fb4a))


### chore

* fix peer deps ([6b540cf](https://github.com/cherryblossom000/eslint-config/commit/6b540cf9de2f6d65ce02fe971c5bcaeacb126de8))


### Features

* add `eslint-plugin-promise` ([866f6bb](https://github.com/cherryblossom000/eslint-config/commit/866f6bb9d8ff7658d125b4de0ef28b9686e0927a))
* add `eslint-plugin-unicorn` ([7cd1d21](https://github.com/cherryblossom000/eslint-config/commit/7cd1d21e94bf99bdbff4560049ec82c2ecce37ae))
* **browser:** add `eslint-plugin-compat` ([0c47487](https://github.com/cherryblossom000/eslint-config/commit/0c47487f2a041021464a3f6bcca73054906e752d))
* add `jsdoc/require-throws` ([4577172](https://github.com/cherryblossom000/eslint-config/commit/45771729e6a7697aa4af26c4a3ad303e18e81615))
* add jest configs ([be3c71f](https://github.com/cherryblossom000/eslint-config/commit/be3c71f51a503988b380d56780e0683794fe442a))
* add markdown and html support ([db578d9](https://github.com/cherryblossom000/eslint-config/commit/db578d94d8d9089cdf7199e5698c4f89c542c4be))
* add react configs ([ba845c9](https://github.com/cherryblossom000/eslint-config/commit/ba845c9a9215652f85129c1a792d1d332d278387))
* **ts:** add `@typescript-eslint/no-loss-of-precision` ([4a1a36b](https://github.com/cherryblossom000/eslint-config/commit/4a1a36b2255172cfc966fc4214b6f35ea9d52a02))


### BREAKING CHANGES

* Requires `eslint-plugin-promise@^4`.
* Requires `eslint-plugin-unicorn@^20`.
* Requires `eslint-plugin-compat@^3`.
* **browser:** The `browser`, `js/browser`, `ts/browser`, `react`, `js/react`, and `ts/react`
plugins require `eslint-plugin-compat`.
* Peer dependencies need to satisfy the major versions to avoid breaking changes.
* Requires `eslint-plugin-jsdoc` to be `>=27.1` (compared to `>=25`).
* **ts:** Requires `@typescript-eslint/eslint-plugin` to be `>=3.4` (comapred to `>=3.1`).
* Blocks now need to have spaces in between the braces.

## [4.0.4](https://github.com/cherryblossom000/eslint-config/compare/v4.0.3...v4.0.4) (2020-07-14)


### Bug Fixes

* allow reflect-metadata for `import/no-unassigned-import` ([402e007](https://github.com/cherryblossom000/eslint-config/commit/402e0071ae9b258de7020b69b3b966ef2cb2a3f4))

## [4.0.3](https://github.com/cherryblossom000/eslint-config/compare/v4.0.2...v4.0.3) (2020-07-11)


### Bug Fixes

* **ts:** allow declared namespaces ([ae70458](https://github.com/cherryblossom000/eslint-config/commit/ae70458707fc03759937e71fe6bee2a18649b586))
* remove jsdoc/match-description ([5e729a7](https://github.com/cherryblossom000/eslint-config/commit/5e729a7b3e60e0ab1d96178c99480a3d4b6ba30a))

## [4.0.2](https://github.com/cherryblossom000/eslint-config/compare/v4.0.1...v4.0.2) (2020-07-04)


### Bug Fixes

* fix dupliated errors for inline comments ([7d6db59](https://github.com/cherryblossom000/eslint-config/commit/7d6db59b607d07baf24fa2f6ed52b39b3dad46ed))

## [4.0.1](https://github.com/cherryblossom000/eslint-config/compare/v4.0.0...v4.0.1) (2020-07-01)


### Bug Fixes

* **js:** exclude `(Async)(Generator)Function` from `new-cap` ([b994eff](https://github.com/cherryblossom000/eslint-config/commit/b994eff1f512a9f51314ea2c40d897efc4b50dda))
* **ts:** allow PascalCase enum members ([655d256](https://github.com/cherryblossom000/eslint-config/commit/655d256b440c17d10c173cf421c82af366af4329))

# [4.0.0](https://github.com/cherryblossom000/eslint-config/compare/v3.0.1...v4.0.0) (2020-06-24)


### Features

* **js:** enable `no-promise-executor-return` and `no-unreachable-loop` ([73eac53](https://github.com/cherryblossom000/eslint-config/commit/73eac53f4d101d7e701b40138aec230b76de133f))


### BREAKING CHANGES

* **js:** The ESLint peer dependency now has to be `>=7.3` (vs `>=7.1` before).

## [3.0.1](https://github.com/cherryblossom000/eslint-config/compare/v3.0.0...v3.0.1) (2020-06-24)


### Bug Fixes

* **js/node:** now requires extensions (except packages) and full paths for imports ([4a01024](https://github.com/cherryblossom000/eslint-config/commit/4a010244929c75f97eab312298c1b0dcb2de4c7b))
* **ts:** disable @typescript-eslint/no-var-requires ([4f0700c](https://github.com/cherryblossom000/eslint-config/commit/4f0700c0b0c7d6a66cf6166cce4b86519cdefe33))
* **ts:** disable default-param-last ([b5caf64](https://github.com/cherryblossom000/eslint-config/commit/b5caf64b2cea2da213785a49ffe3dfa3f4774901))
* **ts:** remove node plugin in base ts config ([f2ede6b](https://github.com/cherryblossom000/eslint-config/commit/f2ede6b9b1ce819fb77806b5b5eef59083d55bd1))

# [3.0.0](https://github.com/cherryblossom000/eslint-config/compare/v2.0.0...v3.0.0) (2020-06-12)


### Bug Fixes

* ignore strings in max-len ([aa392e2](https://github.com/cherryblossom000/eslint-config/commit/aa392e204de2267e6a480e5b927cdd707706b74e))


### Features

* add one-var ([1c06713](https://github.com/cherryblossom000/eslint-config/commit/1c06713480087ffe6ac7e20a4cea6e108b2dc618))
* ignore external modules for import/no-cycle ([7ef81c7](https://github.com/cherryblossom000/eslint-config/commit/7ef81c73685997ff9817dfdee45dbdd7e45b2792))
* **ts:** use allow-with-description in ban-ts-comment ([7887409](https://github.com/cherryblossom000/eslint-config/commit/7887409ac7642a9d5c22eafd1d2c4f5de746975f))


### BREAKING CHANGES

* This requires the peer dependency `eslint-plugin-import` to be `>=2.21`.
* Multiple initialised variables in a single declaration now trigger a warning.
* **ts:** This requires a peer dependency of @typescript-eslint/eslint-plugin of `>=3.1`.

# [2.0.0](https://github.com/cherryblossom000/eslint-config/compare/v1.0.1...v2.0.0) (2020-06-03)


### Bug Fixes

* **js:** remove no-duplicate-imports as it is already reported by import/no-duplicates ([fcea498](https://github.com/cherryblossom000/eslint-config/commit/fcea4987730b5faad62c93b292ce2740928d5877))
* **ts:** add tryExtensions in node settings ([9963407](https://github.com/cherryblossom000/eslint-config/commit/996340751c3656219572854fa2b3b192de92fc01))
* **ts:** disable no-loss-of-precision as it doesn't work for numeric separators ([37890fd](https://github.com/cherryblossom000/eslint-config/commit/37890fd7c58eb3b2cb6a19dc97d9076178be3a57))
* **ts:** remove import/order ([3f63f50](https://github.com/cherryblossom000/eslint-config/commit/3f63f5078d3ffb5bf5e70f34d367a8f603c68634))


### Features

* disallow for... in and for... of in favour of forEach ([47c22dc](https://github.com/cherryblossom000/eslint-config/commit/47c22dc65830fd20791dbd7beeca11c36a16a718))


### BREAKING CHANGES

* for... in and non-`await` for... of statements without `return`s or `break`s will
be flagged.

## [1.0.1](https://github.com/cherryblossom000/eslint-config/compare/v1.0.0...v1.0.1) (2020-05-30)


### Bug Fixes

* fix crash ([bd6d839](https://github.com/cherryblossom000/eslint-config/commit/bd6d839f53b53712b0137c38a711c65ddf4866d8))

# 1.0.0 (2020-05-30)


### Features

* initial commit ([85a6767](https://github.com/cherryblossom000/eslint-config/commit/85a67675091983a2d1db2fead1ecf769438efa4a))
