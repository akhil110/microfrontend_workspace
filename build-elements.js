const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const prgName = process.argv.slice(2)[0];
  if (prgName === '' || prgName === undefined) {
    console.log('Project Name required as argument');
    return false;
  } else {
    const files_es2015 = [
      './dist/' + prgName + '/polyfill-webcomp-es5.js',
      './dist/' + prgName + '/polyfill-webcomp.js',
      './dist/' + prgName + '/polyfills-es2015.js',
      './dist/' + prgName + '/scripts.js',
      './dist/' + prgName + '/main-es2015.js',
    ]
    await fs.ensureDir('./dist/' + prgName + '/elements');
    await concat(files_es2015, './dist/' + prgName + '/elements/' + prgName + '-elements-es2015.js');
    
    const files_es5 = [
      './dist/' + prgName + '/polyfill-webcomp-es5.js',
      './dist/' + prgName + '/polyfill-webcomp.js',
      './dist/' + prgName + '/polyfills-es5.js',
      './dist/' + prgName + '/scripts.js',
      './dist/' + prgName + '/main-es5.js',
    ]
    await fs.ensureDir('./dist/' + prgName + '/elements');
    await concat(files_es5, './dist/' + prgName + '/elements/' + prgName + '-elements-es5.js');
    
    console.log('Done generating bundles for ' + prgName);
  }
})()