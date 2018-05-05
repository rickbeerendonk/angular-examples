/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

System.config({
  paths: {
    'npm:': '../../node_modules/'
  },
  map: {
    'rxjs': 'npm:rxjs',
    'ts': 'npm:plugin-typescript',
    'typescript': 'npm:typescript',
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    // Animations:
    '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',

    // Needed for synthetic property "@componentState":
    '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
  },
  packages: {
    'app': { 
      defaultExtension: 'ts',
      main: './bootstrap.ts'
    },
    'rxjs': { 
      defaultExtension: 'js',
      main: 'index.js',
      map: {
        './operators': './operators/index.js'
      }
    },
    'ts': {
      main: 'lib/plugin.js'
    },
    'typescript': {
      main: 'lib/typescript.js',
      meta: {
        'lib/typescript.js': {
          exports: 'ts'
        }
      }
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    module: 'system',
    tsconfig: true
  }
});
