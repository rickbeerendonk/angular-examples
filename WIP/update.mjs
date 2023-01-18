import fs, {
  copyFileSync,
  existsSync,
  readdirSync,
  statSync,
  unlinkSync
} from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];

  const files = readdirSync(dir);

  if (files.filter(file => file === 'index.html').length === 1) {
    //console.log('push: ', path);
    results.push(dir);
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

      const fullFile = path.join(dir, file);
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

for (const pathBase of paths) {
  // Adjust folder
  console.log(pathBase);

  // Delete unneeded files
  deleteIfExists(path.join(pathBase, 'systemjs.config.js'));
  deleteIfExists(path.join(pathBase, 'tsconfig.json'));

  // Create new target folder
  const pathProject = path.join(pathBase, 'ngmodule');
  const pathSrc = path.join(pathProject, 'src');
  //fs.mkdirSync(pathSrc);

  // Copy all files recursively
  fs.cpSync(pathBase, pathSrc, { recursive: true });
  //copyFolderRecursiveSync(pathBase, 'ngmodule/src');
}

console.log('Number of folders: ', paths.length);
