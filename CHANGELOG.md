# Changelog

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
