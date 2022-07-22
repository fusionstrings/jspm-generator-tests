import { Generator } from '@jspm/generator';

const generator = new Generator({
  env: ['production', 'browser', 'module'],
});

// Install a new package into the import map
await generator.install('@jspm/import-map');

console.log(JSON.stringify(generator.getMap(), null, 2));