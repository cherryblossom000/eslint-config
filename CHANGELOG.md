# Changelog

# [20.0.0](https://github.com/cherryblossom000/eslint-config/compare/v19.0.0...v20.0.0) (2023-08-07)


### chore

* upgrade prettier ([ddd9f2f](https://github.com/cherryblossom000/eslint-config/commit/ddd9f2fb6c87ed7aad1369827b259bc5c1763a61))


### Features

* support eslint-plugin-unicorn@48 ([555ca63](https://github.com/cherryblossom000/eslint-config/commit/555ca63717631ec063eda2b9d977f55f24bacbc8))
* **ts:** add fp config ([70f530b](https://github.com/cherryblossom000/eslint-config/commit/70f530bc9b7c361c57e47e373b82f3426311b476))
* **ts:** use typescript-eslint@6 ([881960b](https://github.com/cherryblossom000/eslint-config/commit/881960be9e02df25d686ea5092d205859c28ee8f))


### BREAKING CHANGES

* **ts:** Requires typescript-eslint v6.
* Requires prettier@3.

# [19.0.0](https://github.com/cherryblossom000/eslint-config/compare/v18.0.2...v19.0.0) (2023-06-10)


### Code Refactoring

* remove jsdoc configs ([45609aa](https://github.com/cherryblossom000/eslint-config/commit/45609aa258b406145b465c8170d8804f5d1b33dc))


### Features

* **browser:** enable `unicorn/prefer-blob-reading-methods` ([cf9d3d3](https://github.com/cherryblossom000/eslint-config/commit/cf9d3d3e1cad9107490d66a566cfa0978cd385bf))
* **ts:** enable `@typescript-eslint/no-unsafe-enum-comparison` ([6899cc9](https://github.com/cherryblossom000/eslint-config/commit/6899cc94ef8ba55fed4f924bb86ced68e00bb7c3))


### BREAKING CHANGES

* `js/jsdoc` and `ts/jsdoc` do not exist anymore. Please configure
`eslint-plugin-jsdoc` separately
* **browser:** Requires Node.js 16, eslint v8.38, and eslint-plugin-unicorn v47.
* **ts:** Requires `@typescript-eslint/eslint-plugin@5.58`.

## [18.0.2](https://github.com/cherryblossom000/eslint-config/compare/v18.0.1...v18.0.2) (2023-04-09)


### Bug Fixes

* support typescript@5 ([4e4e636](https://github.com/cherryblossom000/eslint-config/commit/4e4e636161aa81092d680e5705967ee064e484a0))

## [18.0.1](https://github.com/cherryblossom000/eslint-config/compare/v18.0.0...v18.0.1) (2023-04-09)


### Bug Fixes

* support eslint-plugin-unicorn@46 ([b73426a](https://github.com/cherryblossom000/eslint-config/commit/b73426a3b435cea263c5ca8e58dd8decd6dc090b))

# [18.0.0](https://github.com/cherryblossom000/eslint-config/compare/v17.0.0...v18.0.0) (2023-03-01)


* feat!: mv jsdoc to separate configs ([9b9cded](https://github.com/cherryblossom000/eslint-config/commit/9b9cded2f0dfe58c7ce163c556dee455d369bda6))


### Features

* `trailingComma: all` ([a9524c5](https://github.com/cherryblossom000/eslint-config/commit/a9524c509b06d9b91c451c6ef9818f5783e4ff85))
* disable `eslint-comments/require-description` ([fbfd868](https://github.com/cherryblossom000/eslint-config/commit/fbfd8685c85cca792e0425665d6c7fca179e5590))
* remove eslint-plugin-promise ([447e9dc](https://github.com/cherryblossom000/eslint-config/commit/447e9dc4c75ddc47b6a07faa2bd2946b914693cd))


### BREAKING CHANGES

* to lint JSDoc comments you must extend the `js/jsdoc` or `ts/jsdoc` config

# [17.0.0](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0...v17.0.0) (2023-01-26)


### Bug Fixes

* allow 'element-behaviors' to be imported unassigned ([124ac0f](https://github.com/cherryblossom000/eslint-config/commit/124ac0f8d859e7189c6299d05e163c5bfa7f0e97))


### Features

* **enable `no-new-native-nonconstructor`:** enable the `no-new-native-nonconstructor` rule ([38846ef](https://github.com/cherryblossom000/eslint-config/commit/38846efb3faf9fa33c9851362b0d8b9cb7e39a75))
* enable `promise/no-multiple-resolved` ([e9536da](https://github.com/cherryblossom000/eslint-config/commit/e9536da19cfcdee4cc56b75fe259a8c6e357ac68))
* enable `unicorn/no-typeof-undefined` ([5ec9576](https://github.com/cherryblossom000/eslint-config/commit/5ec957616f063e1333c897453ccfa9d81157c2c6))
* enable `unicorn/prefer-set-sisze` ([b629084](https://github.com/cherryblossom000/eslint-config/commit/b629084190cee6587e2066f451b3ea69c6e2dba2))
* enable `unicorn/switch-case-braces` ([3d76337](https://github.com/cherryblossom000/eslint-config/commit/3d763375e59bc02ceba5139260b237c0305bcada))
* enable logical-assignment-operators ([a5cb8c4](https://github.com/cherryblossom000/eslint-config/commit/a5cb8c4cb8c2bd927a736b84142bf6a19228396a))
* **js:** enable `unicorn/no-unnecessary-await` ([8e330e3](https://github.com/cherryblossom000/eslint-config/commit/8e330e37363707dbbd8702e7c4d687a1e1b083de))
* use unicorn’s no-negated-condition ([9115a7b](https://github.com/cherryblossom000/eslint-config/commit/9115a7b130bb86c91aff107b3d14bc45483330ad))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^45.0.0`.
* Requires `eslint-plugin-promise@^6.1`.
* **js:** Requires `eslint-plugin-unicorn@^44`.
* Requires `eslint@^8.24`.

# [17.0.0-beta.3](https://github.com/cherryblossom000/eslint-config/compare/v17.0.0-beta.2...v17.0.0-beta.3) (2022-11-27)


### Features

* enable `unicorn/no-typeof-undefined` ([5ec9576](https://github.com/cherryblossom000/eslint-config/commit/5ec957616f063e1333c897453ccfa9d81157c2c6))
* enable `unicorn/prefer-set-sisze` ([b629084](https://github.com/cherryblossom000/eslint-config/commit/b629084190cee6587e2066f451b3ea69c6e2dba2))
* use unicorn’s no-negated-condition ([9115a7b](https://github.com/cherryblossom000/eslint-config/commit/9115a7b130bb86c91aff107b3d14bc45483330ad))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^45.0.0`.

# [17.0.0-beta.2](https://github.com/cherryblossom000/eslint-config/compare/v17.0.0-beta.1...v17.0.0-beta.2) (2022-11-13)


### Features

* **enable `no-new-native-nonconstructor`:** enable the `no-new-native-nonconstructor` rule ([38846ef](https://github.com/cherryblossom000/eslint-config/commit/38846efb3faf9fa33c9851362b0d8b9cb7e39a75))
* enable `promise/no-multiple-resolved` ([e9536da](https://github.com/cherryblossom000/eslint-config/commit/e9536da19cfcdee4cc56b75fe259a8c6e357ac68))
* enable `unicorn/switch-case-braces` ([3d76337](https://github.com/cherryblossom000/eslint-config/commit/3d763375e59bc02ceba5139260b237c0305bcada))
* **js:** enable `unicorn/no-unnecessary-await` ([8e330e3](https://github.com/cherryblossom000/eslint-config/commit/8e330e37363707dbbd8702e7c4d687a1e1b083de))


### BREAKING CHANGES

* Requires `eslint-plugin-promise@^6.1`.
* **js:** Requires `eslint-plugin-unicorn@^44`.

# [17.0.0-beta.1](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0...v17.0.0-beta.1) (2022-10-01)


### Features

* enable logical-assignment-operators ([a5cb8c4](https://github.com/cherryblossom000/eslint-config/commit/a5cb8c4cb8c2bd927a736b84142bf6a19228396a))


### BREAKING CHANGES

* Requires `eslint@^8.24`.

# [16.0.0](https://github.com/cherryblossom000/eslint-config/compare/v15.0.3...v16.0.0) (2022-08-25)


### Bug Fixes

* fix eslint-plugin-compat version range ([091b3ce](https://github.com/cherryblossom000/eslint-config/commit/091b3ce42effa48e43f5a9f9cf7bf0a302ef151c))
* **ts:** allow shadowing globals configured via ESLint ([20ffd90](https://github.com/cherryblossom000/eslint-config/commit/20ffd9048ac136855977e7b78e7860d02528eb25))
* **ts:** fix config ([f30c119](https://github.com/cherryblossom000/eslint-config/commit/f30c119395d5819878cda07557082e98b429fd60))


### Code Refactoring

* remove jest and node/12 configs ([4bd27e8](https://github.com/cherryblossom000/eslint-config/commit/4bd27e8254a0ab2342b1e3d232d2c9b34b0aaf1c))


### Features

* enable `@typescript-eslint/no-useless-empty-export` ([789d7ef](https://github.com/cherryblossom000/eslint-config/commit/789d7efc2c86be11e67f704f357564d75a1ebe0c))
* enable `no-constant-binary-expression` ([ead426b](https://github.com/cherryblossom000/eslint-config/commit/ead426b94aa874e63b31e65ddf4d973499b7bb15))
* enable `unicorn/no-useless-switch-case` ([4654580](https://github.com/cherryblossom000/eslint-config/commit/46545808cc1db4f4802d1f3a93766dfe4a7e3949))
* enable `unicorn/prefer-logical-operator-over-ternary` ([91f8cb1](https://github.com/cherryblossom000/eslint-config/commit/91f8cb11211588b4a3d099df5ccc0e9c2185ad46))
* enable `unicorn/prefer-modern-math-apis` ([5d9e68b](https://github.com/cherryblossom000/eslint-config/commit/5d9e68b55c5bde2aab9b454a4d38c7684b95419c))
* enable `unicorn/prefer-native-coercion-functions` ([5258170](https://github.com/cherryblossom000/eslint-config/commit/52581703914b8b84ce43a552e4670878e6a5fa87))
* **jest:** enable `prefer-hooks-in-order` ([02d197e](https://github.com/cherryblossom000/eslint-config/commit/02d197ec1da41ca71bcce3fbdc8f345bfefcf117))
* **node:** enable `unicorn/prefer-event-target ([27daa5c](https://github.com/cherryblossom000/eslint-config/commit/27daa5c6eb75248da2a92acac4ce2eb90fa85662))
* **ts:** enable `@typescript-eslint/no-useless-type-constituents` ([35439ec](https://github.com/cherryblossom000/eslint-config/commit/35439eca98f8df66eb293914d6c9b20444554e8d))
* **ts:** enable `no-duplicate-enum-values` ([7ddd344](https://github.com/cherryblossom000/eslint-config/commit/7ddd3444f0c8ca259f5913a15a2f3c48d10dd2bd))
* **ts:** enable `overrideMethods` option for `no-empty-function` ([2119097](https://github.com/cherryblossom000/eslint-config/commit/211909711f3df1150e2ce957926e57e43bafad0b))
* **ts:** enable `parameter-properties` ([714b731](https://github.com/cherryblossom000/eslint-config/commit/714b731b14c6774a2ec7cde8e023e31504b8dad0))
* **ts:** enable strict config ([ad50254](https://github.com/cherryblossom000/eslint-config/commit/ad50254078d6f3a49e6b0c80251a596cfa130dcb))
* use tabs ([f121dca](https://github.com/cherryblossom000/eslint-config/commit/f121dca61ae4f0d685e9369b44bfef1e43b3ba48))


### BREAKING CHANGES

* jest`, `js/jest`, `ts/jest`, and `node/12` configs are removed
* Requires `eslint-plugin-unicorn@^43`.
* **jest:** Requires eslint-plugin-jest@^26.3.
* Requires eslint@^8.14.
* **ts:** Enables more lints and changes the warn/error status for some other rules.
* **ts:** Requires @typescript-eslint/eslint-plugin@^5.25
* **ts:** Requires @typescript-eslint/eslint-plugin@^5.22.
* **ts:** Requires @typescript-eslint/eslint-plugin@^5.21
* Requires `eslint-plugin-unicorn@^42`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^5.13`.

# [16.0.0-beta.7](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0-beta.6...v16.0.0-beta.7) (2022-07-21)


### Bug Fixes

* **ts:** allow shadowing globals configured via ESLint ([20ffd90](https://github.com/cherryblossom000/eslint-config/commit/20ffd9048ac136855977e7b78e7860d02528eb25))

# [16.0.0-beta.6](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0-beta.5...v16.0.0-beta.6) (2022-07-21)


### Features

* use tabs ([f121dca](https://github.com/cherryblossom000/eslint-config/commit/f121dca61ae4f0d685e9369b44bfef1e43b3ba48))

# [16.0.0-beta.5](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0-beta.4...v16.0.0-beta.5) (2022-07-06)


### Features

* enable `unicorn/prefer-logical-operator-over-ternary` ([91f8cb1](https://github.com/cherryblossom000/eslint-config/commit/91f8cb11211588b4a3d099df5ccc0e9c2185ad46))
* **node:** enable `unicorn/prefer-event-target ([27daa5c](https://github.com/cherryblossom000/eslint-config/commit/27daa5c6eb75248da2a92acac4ce2eb90fa85662))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^43`.

# [16.0.0-beta.4](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0-beta.3...v16.0.0-beta.4) (2022-06-11)


### Bug Fixes

* fix eslint-plugin-compat version range ([091b3ce](https://github.com/cherryblossom000/eslint-config/commit/091b3ce42effa48e43f5a9f9cf7bf0a302ef151c))


### Features

* **jest:** enable `prefer-hooks-in-order` ([02d197e](https://github.com/cherryblossom000/eslint-config/commit/02d197ec1da41ca71bcce3fbdc8f345bfefcf117))


### BREAKING CHANGES

* **jest:** Requires eslint-plugin-jest@^26.3.

## [15.0.3](https://github.com/cherryblossom000/eslint-config/compare/v15.0.2...v15.0.3) (2022-06-11)


### Bug Fixes

* fix eslint-plugin-compat version range ([22d1422](https://github.com/cherryblossom000/eslint-config/commit/22d1422e68b26134fe25b204cc758703a6b87472))

# [16.0.0-beta.3](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0-beta.2...v16.0.0-beta.3) (2022-06-02)


### Features

* enable `no-constant-binary-expression` ([ead426b](https://github.com/cherryblossom000/eslint-config/commit/ead426b94aa874e63b31e65ddf4d973499b7bb15))
* **ts:** enable `no-duplicate-enum-values` ([7ddd344](https://github.com/cherryblossom000/eslint-config/commit/7ddd3444f0c8ca259f5913a15a2f3c48d10dd2bd))
* **ts:** enable `overrideMethods` option for `no-empty-function` ([2119097](https://github.com/cherryblossom000/eslint-config/commit/211909711f3df1150e2ce957926e57e43bafad0b))
* **ts:** enable `parameter-properties` ([714b731](https://github.com/cherryblossom000/eslint-config/commit/714b731b14c6774a2ec7cde8e023e31504b8dad0))
* **ts:** enable strict config ([ad50254](https://github.com/cherryblossom000/eslint-config/commit/ad50254078d6f3a49e6b0c80251a596cfa130dcb))


### BREAKING CHANGES

* Requires eslint@^8.14.
* **ts:** Enables more lints and changes the warn/error status for some other rules.
* **ts:** Requires @typescript-eslint/eslint-plugin@^5.25
* **ts:** Requires @typescript-eslint/eslint-plugin@^5.22.
* **ts:** Requires @typescript-eslint/eslint-plugin@^5.21

# [16.0.0-beta.2](https://github.com/cherryblossom000/eslint-config/compare/v16.0.0-beta.1...v16.0.0-beta.2) (2022-04-10)


### Bug Fixes

* **ts:** fix config ([f30c119](https://github.com/cherryblossom000/eslint-config/commit/f30c119395d5819878cda07557082e98b429fd60))

# [16.0.0-beta.1](https://github.com/cherryblossom000/eslint-config/compare/v15.0.1...v16.0.0-beta.1) (2022-04-10)


### Features

* enable `@typescript-eslint/no-useless-empty-export` ([789d7ef](https://github.com/cherryblossom000/eslint-config/commit/789d7efc2c86be11e67f704f357564d75a1ebe0c))
* enable `unicorn/no-useless-switch-case` ([4654580](https://github.com/cherryblossom000/eslint-config/commit/46545808cc1db4f4802d1f3a93766dfe4a7e3949))
* enable `unicorn/prefer-modern-math-apis` ([5d9e68b](https://github.com/cherryblossom000/eslint-config/commit/5d9e68b55c5bde2aab9b454a4d38c7684b95419c))
* enable `unicorn/prefer-native-coercion-functions` ([5258170](https://github.com/cherryblossom000/eslint-config/commit/52581703914b8b84ce43a552e4670878e6a5fa87))
* **ts:** enable `@typescript-eslint/no-useless-type-constituents` ([35439ec](https://github.com/cherryblossom000/eslint-config/commit/35439eca98f8df66eb293914d6c9b20444554e8d))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^42`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^5.13`.

## [15.0.2](https://github.com/cherryblossom000/eslint-config/compare/v15.0.1...v15.0.2) (2022-04-10)


### Bug Fixes

* support eslint-plugin-jsdoc v38 and v39 ([54feffe](https://github.com/cherryblossom000/eslint-config/commit/54feffe4e0482611ff29c8237f642da0e58ee5a1))
* support eslint-plugin-unicorn v42 ([e41a8d9](https://github.com/cherryblossom000/eslint-config/commit/e41a8d92eb244ae5452b4144be1b767ac531bc63))

## [15.0.1](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0...v15.0.1) (2022-02-27)


### Bug Fixes

* **ts:** fix @typescript-eslint/no-shadow for eslint v8.10 ([cbcab01](https://github.com/cherryblossom000/eslint-config/commit/cbcab01b81be3ff67228924c45541928e7c3bba6))

# [15.0.0](https://github.com/cherryblossom000/eslint-config/compare/v14.9.1...v15.0.0) (2022-02-20)


### Bug Fixes

* add `prettier` as a peer dependency ([aebfbbe](https://github.com/cherryblossom000/eslint-config/commit/aebfbbe3d632e02503a673b556cc2d62ffd165ee))
* add back `unicorn/prefer-array-flat` and `unicorn/prefer-array-flat-map` ([965005e](https://github.com/cherryblossom000/eslint-config/commit/965005ebddbe06ffa63cd8b706169a7a254c985b))
* allow 6 digit hex numbers without separators ([a8454ed](https://github.com/cherryblossom000/eslint-config/commit/a8454edc3cedca821c13484104b204360fec8ef8))
* allow css files in `import/no-unassigned-import` ([1cd5396](https://github.com/cherryblossom000/eslint-config/commit/1cd53960b9ed1b4aa05eccf379628e0552bf0c0a))
* **browser:** stop reporting missing exports ([cdaebef](https://github.com/cherryblossom000/eslint-config/commit/cdaebefd30b8e477ac6ce65b64d252cde0efe3b0))
* fix `node/12` config ([5f089fa](https://github.com/cherryblossom000/eslint-config/commit/5f089fa729693b70ad19a4d879f84184a9889f65))
* fix `ts/node` and `node` configs from crashing eslint ([67da35c](https://github.com/cherryblossom000/eslint-config/commit/67da35cb3a50d86f6fa4ef80dfedcb3d74d21193))
* fix some issues with node configs ([dcf7fa1](https://github.com/cherryblossom000/eslint-config/commit/dcf7fa109774d1fb21aebfab8d20528da086375a))
* **js/node:** extend base config ([6969c56](https://github.com/cherryblossom000/eslint-config/commit/6969c566433d5c5535883064189fefb7af34b54d))
* **js/node:** use cjs/mjs extensions for import/extensions ([4f8412a](https://github.com/cherryblossom000/eslint-config/commit/4f8412ab97243ce765dbf460147468030d7b2b13))
* **node/14:** fix config ([7bb3dab](https://github.com/cherryblossom000/eslint-config/commit/7bb3dab158ed036ab60efe0322416db564c8e179))
* **node/commonjs:** disable `unicorn/prefer-module` ([725666c](https://github.com/cherryblossom000/eslint-config/commit/725666c76f52bde1a830e4ace359b1be80951f48))
* **node:** fix commonjs and esm configs for ts files ([345d04d](https://github.com/cherryblossom000/eslint-config/commit/345d04de42d4f41e46ebb9ce3e4df9b05bb2bb13))
* remove the `import/unambiguous` rule ([b7f536a](https://github.com/cherryblossom000/eslint-config/commit/b7f536aa65c74414db2690fae844d0e9e96b241f))
* **ts/node:** fix config ([7f664a8](https://github.com/cherryblossom000/eslint-config/commit/7f664a8544f7e7d77b07641f3fd0f7a4b1b73a13))
* **ts/node:** remove ts/node/{commonjs,esm} configs ([7fa1d51](https://github.com/cherryblossom000/eslint-config/commit/7fa1d51b86005bc43b4ac6d79d806667afac2e32))
* **ts:** allow unused parameters to start with any number of `_`s ([374bdfb](https://github.com/cherryblossom000/eslint-config/commit/374bdfb4ab0c98176fea4d098bb1834d430dc409))
* **ts:** disable `unicorn/prefer-module` for non-`esm` configs ([0286e21](https://github.com/cherryblossom000/eslint-config/commit/0286e211ac65130428ade101100e3e4e0a3b31ed))
* **ts:** fix naming-convention config ([87893c5](https://github.com/cherryblossom000/eslint-config/commit/87893c51f975a3e4fee37f43f6750bce7caabf24))
* **ts:** ignore destructured variables and parameters ([7567a02](https://github.com/cherryblossom000/eslint-config/commit/7567a025b75ed199909a2e6cee5517da1d9e787e))


### chore

* remove some configs ([4fe7a63](https://github.com/cherryblossom000/eslint-config/commit/4fe7a63a2aff65091370663e565e4ecd8624d430))
* upgrade eslint-plugin-promise ([ec97841](https://github.com/cherryblossom000/eslint-config/commit/ec97841b64f67a8024aaf59cdc6acf12a464710c))


### Features

* add `jsdoc/require-asterisk-prefix` ([e1d9aad](https://github.com/cherryblossom000/eslint-config/commit/e1d9aadb4938495ad73260fb74d86644b4139720))
* add `jsdoc/tag-lines` ([a623ece](https://github.com/cherryblossom000/eslint-config/commit/a623eced0b06d74bc6e66c4ab75cad13f9eb4494))
* add `ts/node/{esm,commonjs}` configs ([5f06683](https://github.com/cherryblossom000/eslint-config/commit/5f066837b75aeb5c4b3dd5d2142545cb5f08f38b))
* add `unicorn/no-empty-file` and `unicorn/prefer-export-from` rules ([940ff29](https://github.com/cherryblossom000/eslint-config/commit/940ff29e3c40180d72666c19f93e26aef1cbacb8))
* add `unicorn/numeric-separators-style` for `js` configs ([3c20d87](https://github.com/cherryblossom000/eslint-config/commit/3c20d877d47a3bb291df564988da4f9baa20bd49))
* add `unicorn/prefer-prototype-methods` ([3757c39](https://github.com/cherryblossom000/eslint-config/commit/3757c39debc6c035ad161a343679d3c76245244b))
* allow `dotenv/config` for `import/no-unassigned-import` ([349a0d0](https://github.com/cherryblossom000/eslint-config/commit/349a0d0c9af927ee77ae1dcba2331ead18ca8209))
* **browser:** add `unicorn/no-document-cookie` ([12a8acb](https://github.com/cherryblossom000/eslint-config/commit/12a8acb09923e950f15eaed8a99784b3218a31d4))
* **browser:** enable `unicorn/no-invalid-remove-event-listener` ([ffaae63](https://github.com/cherryblossom000/eslint-config/commit/ffaae632e802d593c312649798532d4b0e707e37))
* **browser:** enable `unicorn/require-post-message-target-origin` ([ccf453b](https://github.com/cherryblossom000/eslint-config/commit/ccf453ba713d9f5952a96672870c7c68fcdc8de3))
* disable `import/prefer-default-export` ([95fb51e](https://github.com/cherryblossom000/eslint-config/commit/95fb51e5b3beea7517058991a2ebe642933c88a8))
* drop Node.js 12 support ([5b57a55](https://github.com/cherryblossom000/eslint-config/commit/5b57a55b320b905904e85587f991746ad90e0ff5))
* enable `jsdoc/sort-tags` ([46b8990](https://github.com/cherryblossom000/eslint-config/commit/46b89905db5fdb9e7c3067ca3039725f8dd94b08))
* enable `no-unused-private-class-members` ([5494603](https://github.com/cherryblossom000/eslint-config/commit/5494603de7fac3f4365e3056b7e02dcba7977d3f))
* enable `prefer-object-has-own` for ES2022 configs ([9cbc711](https://github.com/cherryblossom000/eslint-config/commit/9cbc711e0d6b2d7c2155041d9eb5ee45d7c12932))
* enable `unicorn/no-array-method-this-argument` ([46ffce3](https://github.com/cherryblossom000/eslint-config/commit/46ffce3c8aaac1340cec68f587e4aabf2180b5c2))
* enable `unicorn/no-thenable` ([155032d](https://github.com/cherryblossom000/eslint-config/commit/155032db32d0f1a6d51256332b9022f719ddf9a6))
* enable `unicorn/no-useless-fallback-in-spread` ([877e6f6](https://github.com/cherryblossom000/eslint-config/commit/877e6f6ead17564bfaf3eb5cb608dd9af480be07))
* enable `unicorn/no-useless-promise-resolve-reject` ([ceffced](https://github.com/cherryblossom000/eslint-config/commit/ceffceddd85a9c422d658a3e06869cc739b42b6b))
* enable `unicorn/prefer-code-point` ([4ad0749](https://github.com/cherryblossom000/eslint-config/commit/4ad07491690cdd5106805b4323c3e07054345c8b))
* enable `unicorn/prefer-ternary` ([feb7c78](https://github.com/cherryblossom000/eslint-config/commit/feb7c7837f3528c40d72f3b4a7c27c9a63bdea43))
* enable `unicorn/relative-url-style` ([060ec6b](https://github.com/cherryblossom000/eslint-config/commit/060ec6b2c4172845f440534448fbbabc3538835d))
* enable `unicorn/throw-new-error` ([47eea4e](https://github.com/cherryblossom000/eslint-config/commit/47eea4e6f30ef7adc7728b61591eb4967cd64ddd))
* enable es2022 rules for node/16 config ([fc16882](https://github.com/cherryblossom000/eslint-config/commit/fc168823dd3d02f312b076697c86f9879c73e96f))
* enable rules introduced in `eslint-plugin-unicorn@35` ([1020dda](https://github.com/cherryblossom000/eslint-config/commit/1020ddaf527f6d56eb17c8f9c091540fb4b6bd88))
* ignore type imports for `import/max-dependencies` ([26238b6](https://github.com/cherryblossom000/eslint-config/commit/26238b68e1cb503ebf7e181a476197400e2e840a))
* ignore whitespace for `jsdoc/no-multi-asterisks` ([eb2d1f8](https://github.com/cherryblossom000/eslint-config/commit/eb2d1f82511fc02682c8e4da627f28d73d713c2c))
* **import,node:** enable `unicorn/prefer-top-level-await` ([b790798](https://github.com/cherryblossom000/eslint-config/commit/b790798dc7cfdb2153e280c5eb728eaf9f331d36))
* **jest:** enable `jest/max-nested-describe` ([66feb2c](https://github.com/cherryblossom000/eslint-config/commit/66feb2c04e67fbc1f8aa392dee56df7ba2bf7730))
* **jest:** enable `jest/perfer-{comparison,equality}-matcher` ([77414fe](https://github.com/cherryblossom000/eslint-config/commit/77414fe1e37b9e6e6b3326adb23111a9e738b7da))
* **jest:** enable `jest/prefer-snaphsot-hint` ([e8b0071](https://github.com/cherryblossom000/eslint-config/commit/e8b00717f5c111d45bd47299001b8e941a850951))
* **jest:** enable `jest/prefer-to-be` and `jest/prefer-expect-resolves` ([381c83f](https://github.com/cherryblossom000/eslint-config/commit/381c83ff6b756264bede0d456d9b8cf563334760))
* **jest:** enable `jest/require-hook` ([0992702](https://github.com/cherryblossom000/eslint-config/commit/0992702eeae20cd5e37037ff18bc2c4abdb5b37a))
* **jest:** support `eslint-plugin-jest@25` ([0f3aa9f](https://github.com/cherryblossom000/eslint-config/commit/0f3aa9fc0fd0e333d770d98937bed52ed4fcdf03))
* **node:** enable `unicorn/text-encoding-identifier-case` ([fea1183](https://github.com/cherryblossom000/eslint-config/commit/fea1183c49448093ff6511dc5e9335d937804059))
* require eslint v8 ([40e8d61](https://github.com/cherryblossom000/eslint-config/commit/40e8d6196ef48f2756de034403aa205a1bbeb104))
* support `eslint-plugin-jest@26` ([b8ee0e8](https://github.com/cherryblossom000/eslint-config/commit/b8ee0e8a068e06122dce408f15a449f4fe1c16b5))
* support `eslint-plugin-jsdoc@34` ([e095b90](https://github.com/cherryblossom000/eslint-config/commit/e095b908e722325310b91f5ac1532d1b71e9cc01))
* support `eslint-plugin-jsdoc@35` ([087062b](https://github.com/cherryblossom000/eslint-config/commit/087062b663a195d92cedc1742d662686a182a4eb))
* support `eslint-plugin-jsdoc@36` ([9780a5d](https://github.com/cherryblossom000/eslint-config/commit/9780a5dc92eb90e76872c1146739af9a21627a80))
* support `eslint-plugin-jsdoc@37` ([e51af5c](https://github.com/cherryblossom000/eslint-config/commit/e51af5cb6fb57b03c55ed90feabe81f7136bde92))
* support `eslint-plugin-unicorn@32` ([d1a6e72](https://github.com/cherryblossom000/eslint-config/commit/d1a6e72e09f3010129a9e5773bbb3997db438657))
* support `eslint-plugin-unicorn@33` ([42d36ac](https://github.com/cherryblossom000/eslint-config/commit/42d36ac56f7cf6943d5f87c08ef8fc6a5138ad47))
* support `eslint-plugin-unicorn@35` ([b0cf25d](https://github.com/cherryblossom000/eslint-config/commit/b0cf25d7e63b054c10e0e8de6b25a78540e03953))
* support `eslint-plugin-unicorn@37` ([1ffbff9](https://github.com/cherryblossom000/eslint-config/commit/1ffbff96c0d2491a4520e7f6ba5cc6b8a3fc381f))
* **ts:** change `@typescript-eslint/naming-convention` config ([2837171](https://github.com/cherryblossom000/eslint-config/commit/28371718efb4a124e1ca8fe6437359cd4dc0430b))
* **ts:** disable `@typescript-eslint/naming-convention` for declaration files ([3942881](https://github.com/cherryblossom000/eslint-config/commit/39428819ccbc280436653efb5cf0b7f0ad2e80bc))
* **ts:** disable `@typescript-eslint/no-implicit-any-catch` ([7f0fd1c](https://github.com/cherryblossom000/eslint-config/commit/7f0fd1ce1cc922556678fa6cc2835bebe38acbf3))
* **ts:** enable `@typescript-eslint/no-non-null-asserted-nullish-coalescing` rule ([b12b870](https://github.com/cherryblossom000/eslint-config/commit/b12b8703212d9567439b060f6a597b5fc296acf1))
* **ts:** relax naming convention rules ([ccf7669](https://github.com/cherryblossom000/eslint-config/commit/ccf7669c2d2ef6d52d1f100b7a10806ebc7cab9f))
* **ts:** support [@typescript-eslint](https://github.com/typescript-eslint) v5 ([cc5f00a](https://github.com/cherryblossom000/eslint-config/commit/cc5f00afefbba67374d4af6f13b0b3b7efc1f2c9))


### BREAKING CHANGES

* **node:** Requires `eslint-plugin-unicorn@^41`.
* Requires `eslint-plugin-jsdoc@^37.8`.
* **jest:** Requires `eslint-plugin-jest@^26.1`.
* **jest:** Requires `eslint-plugin-jest@^25.7`.
* Requires `eslint-plugin-unicorn@^40`.
* Requires `eslint-plugin-jsdoc@^37.5`.
* Requires `eslint@^8.5`.
* Requires `eslint-plugin-promise@^6`.
* The `react`, `js/react`, `ts/react`, and `markdown` configs have been removed.
* Requires `eslint-plugin-unicorn@^39`.
* Requires `eslint-plugin-unicorn@^38`.
* Requires `eslint@^8.1`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^5`.
* Drop support for Node.js 12.
* **jest:** Requires `eslint-plugin-jest@^25`.
* Requires eslint@^8.
* **jest:** Requires `eslint-plugin-jest@^24.7`.
* **jest:** Requires `eslint-plugin-jest@^24.5`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.32`.
* Requires `eslint-plugin-unicorn@36`.
* **ts:** Leading and trailing underscores are mostly forbidden, except for unused variables
where leading underscores are required.
* Requires `prettier@>=1.13.0` as a peer dependency.
* **ts:** Intended to be used for TypeScript v4.4+.
* Requires `eslint-plugin-import^@2.24`.
* Requires `eslint-plugin-unicorn@^35`.
* **jest:** Requires `eslint-plugin-jest@^24.4`.
* **import,node:** For Node.js 12 usage with the `esm` configs, you might need to extend `node/12` to
disable `unicorn/prefer-top-level-await`.
* Requires `eslint-plugin-unicorn@^34`.
* Behaviour of `ts/node` is different.
* Requires `eslint-plugin-unicorn@^33`.
* Requires `eslint-plugin-jsdoc@^34.4`.
* Requires `eslint-plugin-jsdoc@^33.2`.
* **ts/node:** Removes the `ts/node/commonjs` and `ts/node/esm` configs.
* **browser:** Requires `eslint-plugin-unicorn@^32`.
* Requires Node.js v12.

# [15.0.0-beta.29](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.28...v15.0.0-beta.29) (2022-02-20)


### Bug Fixes

* allow 6 digit hex numbers without separators ([a8454ed](https://github.com/cherryblossom000/eslint-config/commit/a8454edc3cedca821c13484104b204360fec8ef8))

# [15.0.0-beta.28](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.27...v15.0.0-beta.28) (2022-02-20)


### Features

* enable `jsdoc/sort-tags` ([46b8990](https://github.com/cherryblossom000/eslint-config/commit/46b89905db5fdb9e7c3067ca3039725f8dd94b08))
* enable `unicorn/no-thenable` ([155032d](https://github.com/cherryblossom000/eslint-config/commit/155032db32d0f1a6d51256332b9022f719ddf9a6))
* enable `unicorn/no-useless-promise-resolve-reject` ([ceffced](https://github.com/cherryblossom000/eslint-config/commit/ceffceddd85a9c422d658a3e06869cc739b42b6b))
* enable `unicorn/relative-url-style` ([060ec6b](https://github.com/cherryblossom000/eslint-config/commit/060ec6b2c4172845f440534448fbbabc3538835d))
* ignore whitespace for `jsdoc/no-multi-asterisks` ([eb2d1f8](https://github.com/cherryblossom000/eslint-config/commit/eb2d1f82511fc02682c8e4da627f28d73d713c2c))
* **jest:** enable `jest/perfer-{comparison,equality}-matcher` ([77414fe](https://github.com/cherryblossom000/eslint-config/commit/77414fe1e37b9e6e6b3326adb23111a9e738b7da))
* **jest:** enable `jest/prefer-snaphsot-hint` ([e8b0071](https://github.com/cherryblossom000/eslint-config/commit/e8b00717f5c111d45bd47299001b8e941a850951))
* **node:** enable `unicorn/text-encoding-identifier-case` ([fea1183](https://github.com/cherryblossom000/eslint-config/commit/fea1183c49448093ff6511dc5e9335d937804059))
* support `eslint-plugin-jest@26` ([b8ee0e8](https://github.com/cherryblossom000/eslint-config/commit/b8ee0e8a068e06122dce408f15a449f4fe1c16b5))


### BREAKING CHANGES

* **node:** Requires `eslint-plugin-unicorn@^41`.
* Requires `eslint-plugin-jsdoc@^37.8`.
* **jest:** Requires `eslint-plugin-jest@^26.1`.
* **jest:** Requires `eslint-plugin-jest@^25.7`.
* Requires `eslint-plugin-unicorn@^40`.
* Requires `eslint-plugin-jsdoc@^37.5`.

# [15.0.0-beta.27](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.26...v15.0.0-beta.27) (2021-12-26)


### Bug Fixes

* **ts:** fix naming-convention config ([87893c5](https://github.com/cherryblossom000/eslint-config/commit/87893c51f975a3e4fee37f43f6750bce7caabf24))

# [15.0.0-beta.26](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.25...v15.0.0-beta.26) (2021-12-26)


### Bug Fixes

* **ts:** allow unused parameters to start with any number of `_`s ([374bdfb](https://github.com/cherryblossom000/eslint-config/commit/374bdfb4ab0c98176fea4d098bb1834d430dc409))


### chore

* remove some configs ([4fe7a63](https://github.com/cherryblossom000/eslint-config/commit/4fe7a63a2aff65091370663e565e4ecd8624d430))
* upgrade eslint-plugin-promise ([ec97841](https://github.com/cherryblossom000/eslint-config/commit/ec97841b64f67a8024aaf59cdc6acf12a464710c))


### Features

* enable `prefer-object-has-own` for ES2022 configs ([9cbc711](https://github.com/cherryblossom000/eslint-config/commit/9cbc711e0d6b2d7c2155041d9eb5ee45d7c12932))
* enable `unicorn/prefer-code-point` ([4ad0749](https://github.com/cherryblossom000/eslint-config/commit/4ad07491690cdd5106805b4323c3e07054345c8b))
* enable es2022 rules for node/16 config ([fc16882](https://github.com/cherryblossom000/eslint-config/commit/fc168823dd3d02f312b076697c86f9879c73e96f))


### BREAKING CHANGES

* Requires `eslint@^8.5`.
* Requires `eslint-plugin-promise@^6`.
* The `react`, `js/react`, `ts/react`, and `markdown` configs have been removed.
* Requires `eslint-plugin-unicorn@^39`.

# [15.0.0-beta.25](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.24...v15.0.0-beta.25) (2021-11-24)


### Features

* allow `dotenv/config` for `import/no-unassigned-import` ([349a0d0](https://github.com/cherryblossom000/eslint-config/commit/349a0d0c9af927ee77ae1dcba2331ead18ca8209))

# [15.0.0-beta.24](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.23...v15.0.0-beta.24) (2021-11-05)


### Bug Fixes

* **js/node:** use cjs/mjs extensions for import/extensions ([4f8412a](https://github.com/cherryblossom000/eslint-config/commit/4f8412ab97243ce765dbf460147468030d7b2b13))


### Features

* add `unicorn/no-empty-file` and `unicorn/prefer-export-from` rules ([940ff29](https://github.com/cherryblossom000/eslint-config/commit/940ff29e3c40180d72666c19f93e26aef1cbacb8))
* **ts:** relax naming convention rules ([ccf7669](https://github.com/cherryblossom000/eslint-config/commit/ccf7669c2d2ef6d52d1f100b7a10806ebc7cab9f))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^38`.

# [15.0.0-beta.23](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.22...v15.0.0-beta.23) (2021-10-25)


### Features

* drop Node.js 12 support ([5b57a55](https://github.com/cherryblossom000/eslint-config/commit/5b57a55b320b905904e85587f991746ad90e0ff5))
* enable `no-unused-private-class-members` ([5494603](https://github.com/cherryblossom000/eslint-config/commit/5494603de7fac3f4365e3056b7e02dcba7977d3f))
* **jest:** enable `jest/prefer-to-be` and `jest/prefer-expect-resolves` ([381c83f](https://github.com/cherryblossom000/eslint-config/commit/381c83ff6b756264bede0d456d9b8cf563334760))
* **jest:** enable `jest/require-hook` ([0992702](https://github.com/cherryblossom000/eslint-config/commit/0992702eeae20cd5e37037ff18bc2c4abdb5b37a))
* **jest:** support `eslint-plugin-jest@25` ([0f3aa9f](https://github.com/cherryblossom000/eslint-config/commit/0f3aa9fc0fd0e333d770d98937bed52ed4fcdf03))
* require eslint v8 ([40e8d61](https://github.com/cherryblossom000/eslint-config/commit/40e8d6196ef48f2756de034403aa205a1bbeb104))
* support `eslint-plugin-jsdoc@37` ([e51af5c](https://github.com/cherryblossom000/eslint-config/commit/e51af5cb6fb57b03c55ed90feabe81f7136bde92))
* support `eslint-plugin-unicorn@37` ([1ffbff9](https://github.com/cherryblossom000/eslint-config/commit/1ffbff96c0d2491a4520e7f6ba5cc6b8a3fc381f))
* **ts:** enable `@typescript-eslint/no-non-null-asserted-nullish-coalescing` rule ([b12b870](https://github.com/cherryblossom000/eslint-config/commit/b12b8703212d9567439b060f6a597b5fc296acf1))
* **ts:** support [@typescript-eslint](https://github.com/typescript-eslint) v5 ([cc5f00a](https://github.com/cherryblossom000/eslint-config/commit/cc5f00afefbba67374d4af6f13b0b3b7efc1f2c9))


### BREAKING CHANGES

* Requires `eslint@^8.1`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^5`.
* Drop support for Node.js 12.
* **jest:** Requires `eslint-plugin-jest@^25`.
* Requires eslint@^8.
* **jest:** Requires `eslint-plugin-jest@^24.7`.
* **jest:** Requires `eslint-plugin-jest@^24.5`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.32`.

# [15.0.0-beta.22](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.21...v15.0.0-beta.22) (2021-09-14)


### Bug Fixes

* **node:** fix commonjs and esm configs for ts files ([345d04d](https://github.com/cherryblossom000/eslint-config/commit/345d04de42d4f41e46ebb9ce3e4df9b05bb2bb13))

# [15.0.0-beta.21](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.20...v15.0.0-beta.21) (2021-09-14)


### Bug Fixes

* **ts:** ignore destructured variables and parameters ([7567a02](https://github.com/cherryblossom000/eslint-config/commit/7567a025b75ed199909a2e6cee5517da1d9e787e))

# [15.0.0-beta.20](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.19...v15.0.0-beta.20) (2021-09-14)


### Features

* **ts:** disable `@typescript-eslint/naming-convention` for declaration files ([3942881](https://github.com/cherryblossom000/eslint-config/commit/39428819ccbc280436653efb5cf0b7f0ad2e80bc))

# [15.0.0-beta.19](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.18...v15.0.0-beta.19) (2021-09-14)


### Bug Fixes

* **ts:** fix config for `@typescript-eslint/ban-types` ([758f3cf](https://github.com/cherryblossom000/eslint-config/commit/758f3cfcfa76544e38ee7c3a6956a26ed0518970))

# [15.0.0-beta.18](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.17...v15.0.0-beta.18) (2021-09-14)


### Features

* **browser:** enable `unicorn/no-invalid-remove-event-listener` ([ffaae63](https://github.com/cherryblossom000/eslint-config/commit/ffaae632e802d593c312649798532d4b0e707e37))
* enable `unicorn/no-useless-fallback-in-spread` ([877e6f6](https://github.com/cherryblossom000/eslint-config/commit/877e6f6ead17564bfaf3eb5cb608dd9af480be07))
* support `eslint-plugin-unicorn@36` ([aae46ec](https://github.com/cherryblossom000/eslint-config/commit/aae46ece26b161db22f60f87d8b5631beff58501))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@36`.

# [15.0.0-beta.17](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.16...v15.0.0-beta.17) (2021-09-06)


### Features

* **ts:** allow `object` ([b83cb79](https://github.com/cherryblossom000/eslint-config/commit/b83cb794864f15f07278921cb12e2ef487fc394a))

# [15.0.0-beta.16](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.15...v15.0.0-beta.16) (2021-09-06)


### Features

* **ts:** change `@typescript-eslint/naming-convention` config ([2837171](https://github.com/cherryblossom000/eslint-config/commit/28371718efb4a124e1ca8fe6437359cd4dc0430b))


### BREAKING CHANGES

* **ts:** Leading and trailing underscores are mostly forbidden, except for unused variables
where leading underscores are required.

# [15.0.0-beta.15](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.14...v15.0.0-beta.15) (2021-09-02)


### Bug Fixes

* add `prettier` as a peer dependency ([aebfbbe](https://github.com/cherryblossom000/eslint-config/commit/aebfbbe3d632e02503a673b556cc2d62ffd165ee))


### BREAKING CHANGES

* Requires `prettier@>=1.13.0` as a peer dependency.

# [15.0.0-beta.14](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.13...v15.0.0-beta.14) (2021-08-28)


### Features

* **ts:** disable `@typescript-eslint/no-implicit-any-catch` ([7f0fd1c](https://github.com/cherryblossom000/eslint-config/commit/7f0fd1ce1cc922556678fa6cc2835bebe38acbf3))
* disable `import/prefer-default-export` ([95fb51e](https://github.com/cherryblossom000/eslint-config/commit/95fb51e5b3beea7517058991a2ebe642933c88a8))
* ignore type imports for `import/max-dependencies` ([26238b6](https://github.com/cherryblossom000/eslint-config/commit/26238b68e1cb503ebf7e181a476197400e2e840a))


### BREAKING CHANGES

* **ts:** Intended to be used for TypeScript v4.4+.
* Requires `eslint-plugin-import^@2.24`.

# [15.0.0-beta.13](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.12...v15.0.0-beta.13) (2021-08-10)


### Features

* enable rules introduced in `eslint-plugin-unicorn@35` ([1020dda](https://github.com/cherryblossom000/eslint-config/commit/1020ddaf527f6d56eb17c8f9c091540fb4b6bd88))
* **jest:** enable `jest/max-nested-describe` ([66feb2c](https://github.com/cherryblossom000/eslint-config/commit/66feb2c04e67fbc1f8aa392dee56df7ba2bf7730))
* support `eslint-plugin-jsdoc@36` ([9780a5d](https://github.com/cherryblossom000/eslint-config/commit/9780a5dc92eb90e76872c1146739af9a21627a80))
* support `eslint-plugin-unicorn@35` ([b0cf25d](https://github.com/cherryblossom000/eslint-config/commit/b0cf25d7e63b054c10e0e8de6b25a78540e03953))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^35`.
* **jest:** Requires `eslint-plugin-jest@^24.4`.

# [15.0.0-beta.12](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.11...v15.0.0-beta.12) (2021-07-29)


### Bug Fixes

* allow css files in `import/no-unassigned-import` ([1cd5396](https://github.com/cherryblossom000/eslint-config/commit/1cd53960b9ed1b4aa05eccf379628e0552bf0c0a))
* fix some issues with node configs ([dcf7fa1](https://github.com/cherryblossom000/eslint-config/commit/dcf7fa109774d1fb21aebfab8d20528da086375a))

# [15.0.0-beta.11](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.10...v15.0.0-beta.11) (2021-07-20)


### Bug Fixes

* **node/14:** fix config ([7bb3dab](https://github.com/cherryblossom000/eslint-config/commit/7bb3dab158ed036ab60efe0322416db564c8e179))

# [15.0.0-beta.10](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.9...v15.0.0-beta.10) (2021-07-18)


### Bug Fixes

* **browser:** stop reporting missing exports ([cdaebef](https://github.com/cherryblossom000/eslint-config/commit/cdaebefd30b8e477ac6ce65b64d252cde0efe3b0))
* **node/commonjs:** disable `unicorn/prefer-module` ([725666c](https://github.com/cherryblossom000/eslint-config/commit/725666c76f52bde1a830e4ace359b1be80951f48))
* **ts:** disable `unicorn/prefer-module` for non-`esm` configs ([0286e21](https://github.com/cherryblossom000/eslint-config/commit/0286e211ac65130428ade101100e3e4e0a3b31ed))

# [15.0.0-beta.9](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.8...v15.0.0-beta.9) (2021-07-18)


### Bug Fixes

* fix `node/12` config ([5f089fa](https://github.com/cherryblossom000/eslint-config/commit/5f089fa729693b70ad19a4d879f84184a9889f65))

# [15.0.0-beta.8](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.7...v15.0.0-beta.8) (2021-07-17)


### Features

* enable `unicorn/prefer-ternary` ([feb7c78](https://github.com/cherryblossom000/eslint-config/commit/feb7c7837f3528c40d72f3b4a7c27c9a63bdea43))
* enable `unicorn/throw-new-error` ([47eea4e](https://github.com/cherryblossom000/eslint-config/commit/47eea4e6f30ef7adc7728b61591eb4967cd64ddd))
* **browser:** enable `unicorn/require-post-message-target-origin` ([ccf453b](https://github.com/cherryblossom000/eslint-config/commit/ccf453ba713d9f5952a96672870c7c68fcdc8de3))
* **import,node:** enable `unicorn/prefer-top-level-await` ([b790798](https://github.com/cherryblossom000/eslint-config/commit/b790798dc7cfdb2153e280c5eb728eaf9f331d36))
* enable `unicorn/no-array-method-this-argument` ([46ffce3](https://github.com/cherryblossom000/eslint-config/commit/46ffce3c8aaac1340cec68f587e4aabf2180b5c2))


### BREAKING CHANGES

* **import,node:** For Node.js 12 usage with the `esm` configs, you might need to extend `node/12` to
disable `unicorn/prefer-top-level-await`.
* Requires `eslint-plugin-unicorn@^34`.

# [15.0.0-beta.7](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.6...v15.0.0-beta.7) (2021-07-16)


### Bug Fixes

* **js/node:** extend base config ([6969c56](https://github.com/cherryblossom000/eslint-config/commit/6969c566433d5c5535883064189fefb7af34b54d))

# [15.0.0-beta.6](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.5...v15.0.0-beta.6) (2021-06-11)


### Bug Fixes

* remove the `import/unambiguous` rule ([b7f536a](https://github.com/cherryblossom000/eslint-config/commit/b7f536aa65c74414db2690fae844d0e9e96b241f))


### Features

* add `ts/node/{esm,commonjs}` configs ([5f06683](https://github.com/cherryblossom000/eslint-config/commit/5f066837b75aeb5c4b3dd5d2142545cb5f08f38b))


### BREAKING CHANGES

* Behaviour of `ts/node` is different.

# [15.0.0-beta.5](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.4...v15.0.0-beta.5) (2021-06-08)


### Bug Fixes

* disable `promise/prefer-await-to-then` ([4b86b2f](https://github.com/cherryblossom000/eslint-config/commit/4b86b2f6aa09da674f887c3e470eb789d317bea2))


### Features

* support `eslint-plugin-jsdoc@35` ([35853ce](https://github.com/cherryblossom000/eslint-config/commit/35853cea55dba1dfc4f8963713e139a45bf201c7))
* support `eslint-plugin-unicorn@32` and `eslint-plugin-unicorn@33` ([e9f59ff](https://github.com/cherryblossom000/eslint-config/commit/e9f59ffa8f1ca520f9640eef1ad42bf66f54fb3c))

# [15.0.0-beta.4](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.3...v15.0.0-beta.4) (2021-06-07)


### Features

* add `unicorn/prefer-prototype-methods` ([3757c39](https://github.com/cherryblossom000/eslint-config/commit/3757c39debc6c035ad161a343679d3c76245244b))
* support `eslint-plugin-unicorn@33` ([42d36ac](https://github.com/cherryblossom000/eslint-config/commit/42d36ac56f7cf6943d5f87c08ef8fc6a5138ad47))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@^33`.

# [15.0.0-beta.3](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.2...v15.0.0-beta.3) (2021-05-30)


### Bug Fixes

* add back `unicorn/prefer-array-flat` and `unicorn/prefer-array-flat-map` ([965005e](https://github.com/cherryblossom000/eslint-config/commit/965005ebddbe06ffa63cd8b706169a7a254c985b))
* **ts/node:** fix config ([7f664a8](https://github.com/cherryblossom000/eslint-config/commit/7f664a8544f7e7d77b07641f3fd0f7a4b1b73a13))


### Features

* add `jsdoc/require-asterisk-prefix` ([e1d9aad](https://github.com/cherryblossom000/eslint-config/commit/e1d9aadb4938495ad73260fb74d86644b4139720))
* add `jsdoc/tag-lines` ([a623ece](https://github.com/cherryblossom000/eslint-config/commit/a623eced0b06d74bc6e66c4ab75cad13f9eb4494))
* support `eslint-plugin-jsdoc@34` ([e095b90](https://github.com/cherryblossom000/eslint-config/commit/e095b908e722325310b91f5ac1532d1b71e9cc01))
* support `eslint-plugin-jsdoc@35` ([087062b](https://github.com/cherryblossom000/eslint-config/commit/087062b663a195d92cedc1742d662686a182a4eb))


### BREAKING CHANGES

* Requires `eslint-plugin-jsdoc@^34.4`.
* Requires `eslint-plugin-jsdoc@^33.2`.

# [15.0.0-beta.2](https://github.com/cherryblossom000/eslint-config/compare/v15.0.0-beta.1...v15.0.0-beta.2) (2021-05-13)


### Bug Fixes

* **ts/node:** remove ts/node/{commonjs,esm} configs ([7fa1d51](https://github.com/cherryblossom000/eslint-config/commit/7fa1d51b86005bc43b4ac6d79d806667afac2e32))
* disable unicorn/prefer-node-protocol for TS configs ([e834e22](https://github.com/cherryblossom000/eslint-config/commit/e834e22ffa851ba60562c4ee47a58c0f5ee437d8))


### BREAKING CHANGES

* **ts/node:** Removes the `ts/node/commonjs` and `ts/node/esm` configs.

# [15.0.0-beta.1](https://github.com/cherryblossom000/eslint-config/compare/v14.0.1...v15.0.0-beta.1) (2021-05-09)


### Bug Fixes

* fix `ts/node` and `node` configs from crashing eslint ([67da35c](https://github.com/cherryblossom000/eslint-config/commit/67da35cb3a50d86f6fa4ef80dfedcb3d74d21193))


### Features

* add `unicorn/numeric-separators-style` for `js` configs ([3c20d87](https://github.com/cherryblossom000/eslint-config/commit/3c20d877d47a3bb291df564988da4f9baa20bd49))
* **browser:** add `unicorn/no-document-cookie` ([12a8acb](https://github.com/cherryblossom000/eslint-config/commit/12a8acb09923e950f15eaed8a99784b3218a31d4))
* add `unicorn/numeric-separators-style` for `js` configs ([5705f19](https://github.com/cherryblossom000/eslint-config/commit/5705f19c2ce744f8fce3f44ce1e62c0bef8ff464))
* support `eslint-plugin-unicorn@32` ([d1a6e72](https://github.com/cherryblossom000/eslint-config/commit/d1a6e72e09f3010129a9e5773bbb3997db438657))


### BREAKING CHANGES

* **browser:** Requires `eslint-plugin-unicorn@^32`.
* Requires Node.js v12.


## [14.3.1](https://github.com/cherryblossom000/eslint-config/compare/v14.3.0...v14.3.1) (2021-06-08)


### Bug Fixes

* disable `promise/prefer-await-to-then` ([4b86b2f](https://github.com/cherryblossom000/eslint-config/commit/4b86b2f6aa09da674f887c3e470eb789d317bea2))
# [14.3.0](https://github.com/cherryblossom000/eslint-config/compare/v14.2.0...v14.3.0) (2021-06-08)


### Features

* support `eslint-plugin-jsdoc@35` ([35853ce](https://github.com/cherryblossom000/eslint-config/commit/35853cea55dba1dfc4f8963713e139a45bf201c7))

# [14.2.0](https://github.com/cherryblossom000/eslint-config/compare/v14.1.1...v14.2.0) (2021-06-07)


### Features

* support `eslint-plugin-unicorn@32` and `eslint-plugin-unicorn@33` ([e9f59ff](https://github.com/cherryblossom000/eslint-config/commit/e9f59ffa8f1ca520f9640eef1ad42bf66f54fb3c))

## [14.1.1](https://github.com/cherryblossom000/eslint-config/compare/v14.1.0...v14.1.1) (2021-05-13)


### Bug Fixes

* disable unicorn/prefer-node-protocol for TS configs ([e834e22](https://github.com/cherryblossom000/eslint-config/commit/e834e22ffa851ba60562c4ee47a58c0f5ee437d8))

# [14.1.0](https://github.com/cherryblossom000/eslint-config/compare/v14.0.1...v14.1.0) (2021-05-13)


### Features

* add `unicorn/numeric-separators-style` for `js` configs ([5705f19](https://github.com/cherryblossom000/eslint-config/commit/5705f19c2ce744f8fce3f44ce1e62c0bef8ff464))

## [14.0.1](https://github.com/cherryblossom000/eslint-config/compare/v14.0.0...v14.0.1) (2021-05-09)


### Bug Fixes

* fix `ts/node` and `node` configs from crashing eslint ([5c47165](https://github.com/cherryblossom000/eslint-config/commit/5c47165f42d78a7aac82ce3a15e3c86bc591092f))

# [14.0.0](https://github.com/cherryblossom000/eslint-config/compare/v13.0.0...v14.0.0) (2021-05-08)


### Bug Fixes

* **jest:** make `jest/valid-title` a warning instead of an error ([3f9a678](https://github.com/cherryblossom000/eslint-config/commit/3f9a678e8957c7970d4520abd912908035090fa2))
* **jest:** use TS rules for all TS files, not just `tests/**/*.test.ts` ([ec48925](https://github.com/cherryblossom000/eslint-config/commit/ec489252a213dba986c2d1ed356275037f1a47de))
* **ts:** disable `unicorn/prefer-includes` ([fb673cb](https://github.com/cherryblossom000/eslint-config/commit/fb673cba25920cd8cf55936851eecc4651fae1f1))
* allow inline tags to begin a JSDoc description ([7274767](https://github.com/cherryblossom000/eslint-config/commit/72747677dcd5aafb319f3c2055d5ed789ca3cd12))
* allow undocumented destructured properties in parameters ([4fa1fc1](https://github.com/cherryblossom000/eslint-config/commit/4fa1fc1e98fa643b7a55912207a64ae9fcda793b))
* ignore `esilnt-enable` comments for `eslint-comments/require-description` ([118e964](https://github.com/cherryblossom000/eslint-config/commit/118e96431628c140f92a2d49408e2ad4c140a131))
* prohibit unused jsx expressions ([b14d8b3](https://github.com/cherryblossom000/eslint-config/commit/b14d8b3a156b3af80a0fd6d62bb5c2bac15dcddc))
* **ts:** disable `unicorn/prefer-includes` ([2cc29a1](https://github.com/cherryblossom000/eslint-config/commit/2cc29a11f5193dcd7ecd4b80b69a6a67fb4436e9))
* **ts:** remove `project` from `parserOptions` ([dd42bb0](https://github.com/cherryblossom000/eslint-config/commit/dd42bb0c678a9146a3f1254fb882e4968e94d83f))


### Features

* add `unicorn/prefer-module` for browser and node/esm configs ([2a14a26](https://github.com/cherryblossom000/eslint-config/commit/2a14a2649a3173621335d1fa402ec889c9d9496e))
* support `eslint-plugin-jsdoc@31` ([8938ddf](https://github.com/cherryblossom000/eslint-config/commit/8938ddfb32322c6fed2c63d7d4df254a51dcafef))
* **node:** split configs into `esm` and `commonjs` configs ([8f2b147](https://github.com/cherryblossom000/eslint-config/commit/8f2b147ba30fa52e79fef86bf23ecb18cc4d0b51))
* add `jsdoc/require-yields-check` ([7276dc0](https://github.com/cherryblossom000/eslint-config/commit/7276dc07b782a83bb791c6bf83150e0fd5814682))
* add `jsdoc/require-yields` ([ebcc34b](https://github.com/cherryblossom000/eslint-config/commit/ebcc34b6318f98b70cd438a4f584e3550da9e32a))
* add `unicorn/consistent-destructuring` ([45bcb2d](https://github.com/cherryblossom000/eslint-config/commit/45bcb2d9853b17b55febb10b51e198c606736cdc))
* add `unicorn/no-array-for-each` ([5eb3b62](https://github.com/cherryblossom000/eslint-config/commit/5eb3b620dca2942c12879f2a1d6ba2f13b742fcc))
* add `unicorn/no-array-push-push` ([2cf2521](https://github.com/cherryblossom000/eslint-config/commit/2cf252166b794024e01a64fd87f402a82dcc1c12))
* add `unicorn/no-this-assignment` ([54fe12f](https://github.com/cherryblossom000/eslint-config/commit/54fe12f1a1072700ff3ea5f9eb76f1c21b0a88b7))
* add `unicorn/prefer-array-flat` ([1af9680](https://github.com/cherryblossom000/eslint-config/commit/1af9680453242406acb7ef848c1b79c923fe47f5))
* add `unicorn/prefer-array-index-of` rule ([2053a8b](https://github.com/cherryblossom000/eslint-config/commit/2053a8b1f4379c839604a57b93b86e8e99cb39d3))
* add `unicorn/prefer-node-protocol` ([d7bb5b3](https://github.com/cherryblossom000/eslint-config/commit/d7bb5b3aa07dd5cb797524c574a4044f1c4f32fc))
* add `unicorn/prefer-regexp-test` ([cf77c33](https://github.com/cherryblossom000/eslint-config/commit/cf77c3344878f803e7b2744021f4928d901fd731))
* add `unicorn/prefer-switch` ([a76656a](https://github.com/cherryblossom000/eslint-config/commit/a76656a14e605e5166707d2971fb99a624ead5ce))
* support `eslint-plugin-jsdoc@32` ([3a94c6b](https://github.com/cherryblossom000/eslint-config/commit/3a94c6beca447e6ca4e57447544a67913f7460c2))
* support `eslint-plugin-jsdoc@33` ([a073740](https://github.com/cherryblossom000/eslint-config/commit/a073740926929cc1dd3bb6a732d0808e44255835))
* support `eslint-plugin-promise@5` ([4b92b3d](https://github.com/cherryblossom000/eslint-config/commit/4b92b3dd391b039d6273162094edc5e0e91db4ce))
* support `eslint-plugin-unicorn@29` ([0bd1ddf](https://github.com/cherryblossom000/eslint-config/commit/0bd1ddf4b8f3c66248de49a564c1c03d8e743735))
* support `eslint-plugin-unicorn@31` ([d51863b](https://github.com/cherryblossom000/eslint-config/commit/d51863b2ece7a7980c388f27671ce7f705cc7401))
* **jest:** remove default project for ts and overrides for test files ([0dbb747](https://github.com/cherryblossom000/eslint-config/commit/0dbb747c813383d17a6444bef5ea7ac1b7d3fede))
* **js:** add `unicorn/no-static-only-class` rule ([754966c](https://github.com/cherryblossom000/eslint-config/commit/754966c2b8477b566dee060d0faaaa0d968e7b0b))
* **markdown:** use `eslint-plugin-markdown@2` ([33008e0](https://github.com/cherryblossom000/eslint-config/commit/33008e0d142ae54c6c6136bb5bfeb14c2e634589))
* **ts:** add `@typescript-eslint/no-unsafe-argument` ([c13287e](https://github.com/cherryblossom000/eslint-config/commit/c13287e478b8dc45dca29e0eb473453f5a4d0e45))
* **ts/jest:** add `jest/unbound-method` ([4a914af](https://github.com/cherryblossom000/eslint-config/commit/4a914afef7ea20ff427e099427d7c742ec990185))
* make some rules errors instead of warnings ([0555400](https://github.com/cherryblossom000/eslint-config/commit/0555400e70822c45dd26a5971b3665be96d6e856))
* support `eslint-plugin-jsdoc@31` ([2ae345d](https://github.com/cherryblossom000/eslint-config/commit/2ae345df6a90fa82ee00a03edbf9fb0905f27874))
* support `eslint-plugin-unicorn@28` ([b82ad2e](https://github.com/cherryblossom000/eslint-config/commit/b82ad2e308ee0767a4231ece8f6c2bded7fd6405))


### BREAKING CHANGES

* **jest:** Activates more rules for more files.
* Requires `eslint-plugin-unicorn@31`.
* Requires `eslint-plugin-unicorn@^30`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.21`.
* **js:** Requires `eslint-plugin-unicorn@^29`.
* **ts/jest:** Requires `eslint-plugin-jest@^24.3`.
* **markdown:** Requires `eslint-plugin-markdown@^2`.
* **jest:** `tsconfig.json` is no longer the default project for `ts/jest`.
* **ts:** `tsconfig.json` isn't the default `project` for TypeScript configurations anymore.
* Requires `eslint-plugin-jsdoc@>=31.2`.
* Requires `eslint-plugin-jsdoc@>=31.1`.
* Requires `eslint-plugin-unicorn@^27`.
* Requires `eslint-plugin-unicorn@^26`.

# [14.0.0-beta.6](https://github.com/cherryblossom000/eslint-config/compare/v14.0.0-beta.5...v14.0.0-beta.6) (2021-05-09)


### Bug Fixes

* **ts:** disable `unicorn/prefer-includes` ([fb673cb](https://github.com/cherryblossom000/eslint-config/commit/fb673cba25920cd8cf55936851eecc4651fae1f1))


### Features

* **browser:** add `unicorn/no-document-cookie` ([12a8acb](https://github.com/cherryblossom000/eslint-config/commit/12a8acb09923e950f15eaed8a99784b3218a31d4))
* support `eslint-plugin-jsdoc@31` ([8938ddf](https://github.com/cherryblossom000/eslint-config/commit/8938ddfb32322c6fed2c63d7d4df254a51dcafef))
* support `eslint-plugin-unicorn@32` ([d1a6e72](https://github.com/cherryblossom000/eslint-config/commit/d1a6e72e09f3010129a9e5773bbb3997db438657))


### BREAKING CHANGES

* **browser:** Requires `eslint-plugin-unicorn@^32`.
* Requires Node.js v12.

# [14.0.0-beta.5](https://github.com/cherryblossom000/eslint-config/compare/v14.0.0-beta.4...v14.0.0-beta.5) (2021-05-08)


### Bug Fixes

* **jest:** use TS rules for all TS files, not just `tests/**/*.test.ts` ([ec48925](https://github.com/cherryblossom000/eslint-config/commit/ec489252a213dba986c2d1ed356275037f1a47de))


### Features

* add `unicorn/prefer-module` for browser and node/esm configs ([2a14a26](https://github.com/cherryblossom000/eslint-config/commit/2a14a2649a3173621335d1fa402ec889c9d9496e))
* **node:** split configs into `esm` and `commonjs` configs ([8f2b147](https://github.com/cherryblossom000/eslint-config/commit/8f2b147ba30fa52e79fef86bf23ecb18cc4d0b51))


### BREAKING CHANGES

* **jest:** Activates more rules for more files.

# [14.0.0-beta.4](https://github.com/cherryblossom000/eslint-config/compare/v14.0.0-beta.3...v14.0.0-beta.4) (2021-05-08)


### Features

* add `unicorn/prefer-array-flat` ([1af9680](https://github.com/cherryblossom000/eslint-config/commit/1af9680453242406acb7ef848c1b79c923fe47f5))
* add `unicorn/prefer-node-protocol` ([d7bb5b3](https://github.com/cherryblossom000/eslint-config/commit/d7bb5b3aa07dd5cb797524c574a4044f1c4f32fc))
* add `unicorn/prefer-switch` ([a76656a](https://github.com/cherryblossom000/eslint-config/commit/a76656a14e605e5166707d2971fb99a624ead5ce))
* support `eslint-plugin-jsdoc@33` ([a073740](https://github.com/cherryblossom000/eslint-config/commit/a073740926929cc1dd3bb6a732d0808e44255835))
* support `eslint-plugin-promise@5` ([4b92b3d](https://github.com/cherryblossom000/eslint-config/commit/4b92b3dd391b039d6273162094edc5e0e91db4ce))
* support `eslint-plugin-unicorn@31` ([d51863b](https://github.com/cherryblossom000/eslint-config/commit/d51863b2ece7a7980c388f27671ce7f705cc7401))
* **js:** add `unicorn/no-static-only-class` rule ([754966c](https://github.com/cherryblossom000/eslint-config/commit/754966c2b8477b566dee060d0faaaa0d968e7b0b))
* **ts:** add `@typescript-eslint/no-unsafe-argument` ([c13287e](https://github.com/cherryblossom000/eslint-config/commit/c13287e478b8dc45dca29e0eb473453f5a4d0e45))
* support `eslint-plugin-unicorn@29` ([0bd1ddf](https://github.com/cherryblossom000/eslint-config/commit/0bd1ddf4b8f3c66248de49a564c1c03d8e743735))
* **ts/jest:** add `jest/unbound-method` ([4a914af](https://github.com/cherryblossom000/eslint-config/commit/4a914afef7ea20ff427e099427d7c742ec990185))


### BREAKING CHANGES

* Requires `eslint-plugin-unicorn@31`.
* Requires `eslint-plugin-unicorn@^30`.
* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.21`.
* **js:** Requires `eslint-plugin-unicorn@^29`.
* **ts/jest:** Requires `eslint-plugin-jest@^24.3`.

# [14.0.0-beta.3](https://github.com/cherryblossom000/eslint-config/compare/v14.0.0-beta.2...v14.0.0-beta.3) (2021-03-08)


### Bug Fixes

* **jest:** make `jest/valid-title` a warning instead of an error ([3f9a678](https://github.com/cherryblossom000/eslint-config/commit/3f9a678e8957c7970d4520abd912908035090fa2))

# [14.0.0-beta.2](https://github.com/cherryblossom000/eslint-config/compare/v14.0.0-beta.1...v14.0.0-beta.2) (2021-02-17)


### Bug Fixes

* allow inline tags to begin a JSDoc description ([7274767](https://github.com/cherryblossom000/eslint-config/commit/72747677dcd5aafb319f3c2055d5ed789ca3cd12))
* allow undocumented destructured properties in parameters ([4fa1fc1](https://github.com/cherryblossom000/eslint-config/commit/4fa1fc1e98fa643b7a55912207a64ae9fcda793b))
* prohibit unused jsx expressions ([b14d8b3](https://github.com/cherryblossom000/eslint-config/commit/b14d8b3a156b3af80a0fd6d62bb5c2bac15dcddc))
* **ts:** remove `project` from `parserOptions` ([dd42bb0](https://github.com/cherryblossom000/eslint-config/commit/dd42bb0c678a9146a3f1254fb882e4968e94d83f))


### Features

* support `eslint-plugin-jsdoc@32` ([3a94c6b](https://github.com/cherryblossom000/eslint-config/commit/3a94c6beca447e6ca4e57447544a67913f7460c2))
* support `eslint-plugin-unicorn@28` ([b82ad2e](https://github.com/cherryblossom000/eslint-config/commit/b82ad2e308ee0767a4231ece8f6c2bded7fd6405))
* **jest:** remove default project for ts and overrides for test files ([0dbb747](https://github.com/cherryblossom000/eslint-config/commit/0dbb747c813383d17a6444bef5ea7ac1b7d3fede))
* **markdown:** use `eslint-plugin-markdown@2` ([33008e0](https://github.com/cherryblossom000/eslint-config/commit/33008e0d142ae54c6c6136bb5bfeb14c2e634589))


### BREAKING CHANGES

* **markdown:** Requires `eslint-plugin-markdown@^2`.
* **jest:** `tsconfig.json` is no longer the default project for `ts/jest`.
* **ts:** `tsconfig.json` isn't the default `project` for TypeScript configurations anymore.

# [14.0.0-beta.1](https://github.com/cherryblossom000/eslint-config/compare/v13.0.0...v14.0.0-beta.1) (2021-01-26)


### Bug Fixes

* ignore `esilnt-enable` comments for `eslint-comments/require-description` ([118e964](https://github.com/cherryblossom000/eslint-config/commit/118e96431628c140f92a2d49408e2ad4c140a131))
* **ts:** disable `unicorn/prefer-includes` ([2cc29a1](https://github.com/cherryblossom000/eslint-config/commit/2cc29a11f5193dcd7ecd4b80b69a6a67fb4436e9))


### Features

* add `jsdoc/require-yields-check` ([7276dc0](https://github.com/cherryblossom000/eslint-config/commit/7276dc07b782a83bb791c6bf83150e0fd5814682))
* add `jsdoc/require-yields` ([ebcc34b](https://github.com/cherryblossom000/eslint-config/commit/ebcc34b6318f98b70cd438a4f584e3550da9e32a))
* add `unicorn/consistent-destructuring` ([45bcb2d](https://github.com/cherryblossom000/eslint-config/commit/45bcb2d9853b17b55febb10b51e198c606736cdc))
* add `unicorn/no-array-for-each` ([5eb3b62](https://github.com/cherryblossom000/eslint-config/commit/5eb3b620dca2942c12879f2a1d6ba2f13b742fcc))
* add `unicorn/no-array-push-push` ([2cf2521](https://github.com/cherryblossom000/eslint-config/commit/2cf252166b794024e01a64fd87f402a82dcc1c12))
* add `unicorn/no-this-assignment` ([54fe12f](https://github.com/cherryblossom000/eslint-config/commit/54fe12f1a1072700ff3ea5f9eb76f1c21b0a88b7))
* add `unicorn/prefer-array-index-of` rule ([2053a8b](https://github.com/cherryblossom000/eslint-config/commit/2053a8b1f4379c839604a57b93b86e8e99cb39d3))
* add `unicorn/prefer-regexp-test` ([cf77c33](https://github.com/cherryblossom000/eslint-config/commit/cf77c3344878f803e7b2744021f4928d901fd731))
* make some rules errors instead of warnings ([0555400](https://github.com/cherryblossom000/eslint-config/commit/0555400e70822c45dd26a5971b3665be96d6e856))
* support `eslint-plugin-jsdoc@31` ([2ae345d](https://github.com/cherryblossom000/eslint-config/commit/2ae345df6a90fa82ee00a03edbf9fb0905f27874))


### BREAKING CHANGES

* Requires `eslint-plugin-jsdoc@>=31.2`.
* Requires `eslint-plugin-jsdoc@>=31.1`.
* Requires `eslint-plugin-unicorn@^27`.
* Requires `eslint-plugin-unicorn@^26`.

# [13.0.0](https://github.com/cherryblossom000/eslint-config/compare/v12.0.1...v13.0.0) (2021-01-10)


### Bug Fixes

* **prettier:** specify Prettier config in ESLint config ([a4cf9c0](https://github.com/cherryblossom000/eslint-config/commit/a4cf9c0b4edfd8bf2ca94985e59afacf46556bd5))
* fix config for `unicorn/no-useless-undefined` ([dd15aa4](https://github.com/cherryblossom000/eslint-config/commit/dd15aa45ea588e824731c3a374631f6b5d8f368a))


### Features

* **ts:** add `sort-type-union-intersection-members` ([2629970](https://github.com/cherryblossom000/eslint-config/commit/262997053b21e61e7764fc314a90e22449179f8d))
* add `@typescript-eslint/non-nullable-type-assertion-style` ([5a98c45](https://github.com/cherryblossom000/eslint-config/commit/5a98c45075e182867e2f50cceeb9ee5393c3486d))
* add `no-unsafe-optional-chaining` ([dc1911e](https://github.com/cherryblossom000/eslint-config/commit/dc1911e085c688d525c0fb8719edaa3612aaab77))
* add `unicorn/no-lonely-if` ([1eb7d82](https://github.com/cherryblossom000/eslint-config/commit/1eb7d82ed9db5826f8d42bb2fd8c7a1ee3d17a1c))
* add `unicorn/prefer-array-some` ([de9b9f9](https://github.com/cherryblossom000/eslint-config/commit/de9b9f908af727b0ac820a3de10098da00d77677))
* add `unicorn/prefer-date-now` ([5fcd138](https://github.com/cherryblossom000/eslint-config/commit/5fcd138d59b72b628cfa9fe23f0785a827dc61d3))
* add `unicorn/prefer-default-parameters` ([d425920](https://github.com/cherryblossom000/eslint-config/commit/d4259200a80beee69815d7b7fce47dea546455be))
* enable `reportUnusedDisableDirectives` ([eb820c6](https://github.com/cherryblossom000/eslint-config/commit/eb820c6a882746e780ca14fea392c09502892c48))
* prefer for-of loops over `forEach` ([5aa4141](https://github.com/cherryblossom000/eslint-config/commit/5aa41412ed6dddf9742347233b56ae925fb1be8a))
* support `eslint-plugin-unicorn@25` ([f5c8bbb](https://github.com/cherryblossom000/eslint-config/commit/f5c8bbb4e79ef2760904f8fe61a5255f18f76781))


### BREAKING CHANGES

* **ts:** Requires `@typescript-eslint/eslint-plugin@^4.12`.
* **prettier:** Specifying Prettier configuration with `.prettierrc` is no longer supported.
* Requires `eslint-plugin-unicorn@^25`.
* Requires `eslint-plugin-unicorn@^24`.
* Requires `@typescript-eslint/eslint-plugin@^4.10`.
* Requires `eslint@^7.15`.

## [12.0.1](https://github.com/cherryblossom000/eslint-config/compare/v12.0.0...v12.0.1) (2020-11-21)


### Bug Fixes

* fix peer dependency range for eslint ([a292701](https://github.com/cherryblossom000/eslint-config/commit/a2927011831260470947f2e7acc53b2b5cc2293b))

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
