# @supermapgis/babel-plugin-import

babel的模块化导入插件, 兼容 [@supermapgis/iclient-leaflet](https://www.npmjs.com/package/@supermapgis/iclient-leaflet), [@supermapgis/iclient-mapboxgl](https://www.npmjs.com/package/@supermapgis/iclient-mapboxgl), [@supermapgis/iclient-ol](https://www.npmjs.com/package/@supermapgis/iclient-ol).


#### `{ "libraryName": "@supermapgis/iclient-leaflet" }`

```javascript
import { Logo } from '@supermapgis/iclient-leaflet';
new Logo();

      ↓ ↓ ↓ ↓ ↓ ↓

var Logo = require('@supermapgis/iclient-leaflet/control/Logo.js').Logo;
new Logo();
```

## Usage

以[@supermapgis/iclient-leaflet](https://www.npmjs.com/package/@supermapgis/iclient-leaflet)为例

```bash
npm install @supermapgis/babel-plugin-import --save-dev
```

Via [.babelrc](https://babeljs.io/docs/usage/babelrc/) or [babel-loader](https://github.com/babel/babel-loader/).

```js
{
  "plugins": [
    ['@supermapgis/babel-plugin-import', { libraryName: '@supermapgis/iclient-leaflet' }]
  ]
}
```

[更多](https://iclient.supermap.io/web/introduction/leafletDevelop.html#Modules)