import child_proces = require('child_process')
import path = require('path')
import chokidar = require('chokidar');
const dirPath = path.resolve(__dirname, '../../src/mds')
const execSync = child_proces.execSync



chokidar.watch(dirPath).on('all', (event, path) => {
  execSync('npm run build:nav');
});

// watch mds root
// function watchPath(path:string) {
//   fs.watch(path, () => {
//     execSync('npm run build:nav');
//   });
// }

// watchPath(dirPath)

// const dirs = fs.readdirSync(dirPath)
// for (let dir of dirs) {
//   watchPath(`${dirPath}/${dir}`)
//   const subDirs = fs.readdirSync(`${dirPath}/${dir}`)
//   for (let subDir of subDirs) {
//     watchPath(`${dirPath}/${dir}/${subDir}`)
//   }
// }