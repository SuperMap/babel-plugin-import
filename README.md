# @supermap/babel-plugin-import

Modular import plugin for babel, compatible with [@supermap/iclient-leaflet](https://www.npmjs.com/package/@supermap/iclient-leaflet), [@supermap/iclient-mapboxgl](https://www.npmjs.com/package/@supermap/vue-iclient-mapboxgl), [@supermap/iclient-ol](https://www.npmjs.com/package/@supermap/iclient-ol).


#### `{ "libraryName": "@supermap/iclient-leaflet" }`

```javascript
import { Logo } from '@supermap/iclient-leaflet';
new Logo();

      ↓ ↓ ↓ ↓ ↓ ↓

var Logo = require('@supermap/iclient-leaflet/control/Logo.js').Logo;
new Logo();
```

## Usage

以[@supermap/iclient-leaflet](https://www.npmjs.com/package/@supermap/iclient-leaflet)为例

```bash
npm install @supermap/babel-plugin-import --save-dev
```

Via [.babelrc](https://babeljs.io/docs/usage/babelrc/) or [babel-loader](https://github.com/babel/babel-loader/).

```js
{
  "plugins": [
    ['@supermap/babel-plugin-import', { libraryName: '@supermap/iclient-leaflet' }]
  ]
}
```

[更多](https://iclient.supermap.io/web/introduction/leafletDevelop.html#Modules)