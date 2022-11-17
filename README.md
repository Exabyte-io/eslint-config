[![npm version](https://badge.fury.io/js/%40exabyte-io%2Feslint-config.svg)](https://badge.fury.io/js/%40exabyte-io%2Feslint-config)
[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

# eslint-config

## How to use

1. Install config with eslint and eslint plugins

```
npm install --save-dev \
  @exabyte-io/eslint-config \
  @babel/eslint-parser@7.16.3 \
  @babel/plugin-proposal-class-properties@7.16.0 \
  @babel/preset-env@7.16.4 \
  @babel/preset-react@7.16.7 \
  @babel/register@^7.16.0 \
  @babel/runtime-corejs3@7.16.8 \
  eslint@7.32.0 \
  eslint-config-airbnb@19.0.2 \
  eslint-config-prettier@8.5.0 \
  eslint-import-resolver-exports@^1.0.0-beta.2 \
  eslint-import-resolver-meteor@^0.4.0 \
  eslint-import-resolver-node@^0.3.6 \
  eslint-plugin-import@2.25.3 \
  eslint-plugin-jsdoc@37.1.0 \
  eslint-plugin-jsx-a11y@6.5.1 \
  eslint-plugin-prettier@4.2.1 \
  eslint-plugin-react@7.30.0 \
  eslint-plugin-simple-import-sort@7.0.0
```


2. Create own `.eslintrc.json`:

```
{
    "extends": "@exabyte-io/eslint-config"
}
```
