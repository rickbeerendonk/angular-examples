import { existsSync, readdirSync, statSync, unlinkSync } from 'fs';
import { resolve } from 'path';

function walk(path) {
  let results = [];

  const files = readdirSync(path);

  if (files.filter(file => file === 'index.html').length === 1) {
    //console.log('push: ', path);
    results.push(path);
  } else {
    for (const file of files) {
      //console.log(file);

      if (file === 'node_modules') {
        //console.log('continue');
        break;
      }

      if (file === 'compiled') {
        //console.log('continue');
        break;
      }

      const fullFile = resolve(path, file);
      //console.log(fullFile);

      const stats = statSync(fullFile);

      if (stats && stats.isDirectory()) {
        results = results.concat(walk(fullFile));
      }
    }
  }

  return results;
}

console.log('Current directory:', process.cwd());

const paths = walk(process.cwd()).sort();

function deleteIfExists(path) {
  if (existsSync(path)) {
    unlinkSync(path);
  }
}

for (const path of paths) {
  console.log(path);

  deleteIfExists(resolve(path, 'systemjs.config.js'));
  deleteIfExists(resolve(path, 'tsconfig.json'));
}

console.log('Number of folders: ', paths.length);
