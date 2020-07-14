# Changelog

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
