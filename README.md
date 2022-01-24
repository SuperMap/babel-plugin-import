# @supermap/babel-plugin-import

Modular import plugin for babel, compatible with [@supermap/iclient-leaflet](https://github.com/SuperMap/iClient-JavaScript), [@supermap/iclient-mapboxgl](https://github.com/SuperMap/iClient-JavaScript), [@supermap/iclient-ol](https://github.com/SuperMap/iClient-JavaScript).

[![NPM version](https://img.shields.io/npm/v/babel-plugin-import.svg?style=flat)](https://npmjs.org/package/babel-plugin-import)
[![Build Status](https://img.shields.io/travis/ant-design/babel-plugin-import.svg?style=flat)](https://travis-ci.org/ant-design/babel-plugin-import)

----

## Why @supermap/babel-plugin-import

- [English Instruction](https://iclient.supermap.io/web/introduction/leafletDevelop.html#Modules)
- [中文说明](https://iclient.supermap.io/en/web/introduction/leafletDevelop.html#Modules)

## Where to add @supermap/babel-plugin-import

- [babelrc](https://babeljs.io/docs/usage/babelrc/)
- [babel-loader](https://github.com/babel/babel-loader/)

## Example

#### `{ "libraryName": "@supermap/iclient-leaflet" }`

```javascript
import { Logo } from '@supermap/iclient-leaflet';
new Logo();

      ↓ ↓ ↓ ↓ ↓ ↓

var _logo = require('@supermap/iclient-leaflet/control/Logo.js');
new _logo();
```

## Usage

```bash
npm install @supermap/babel-plugin-import --save-dev
```

Via `.babelrc` or babel-loader.

```js
{
  "plugins": [["@supermap/babel-plugin-import", options]]
}
```

### options

`options` can be object.

```javascript
{
  "libraryName": "iclient-leaflet",
}
```
### Note
@supermap/babel-plugin-import will not work properly if you add the library to the webpack config [vendor](https://webpack.js.org/concepts/entry-points/#separate-app-and-vendor-entries).
