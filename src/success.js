import { ImportMap } from '@jspm/import-map';

const mapUrl = import.meta.url;

const map = new ImportMap({
  mapUrl, // optional
  map: {
    imports: {
      react: 'https://cdn.com/react.js'
    },
    scopes: {
      'https://site.com/': {
        react: 'https://cdn.com/react2.js'
      }
    }
  }
});

console.log(JSON.stringify(map.toJSON(), null, 2));