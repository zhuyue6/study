import fs = require('fs')
import child_proces = require('child_process')
const dirPath = './src/mds'
const execSync = child_proces.execSync

// watch mds root
function watchPath(path:string) {
  fs.watch(path, () => {
    execSync('npm run build:nav');
  });
}

watchPath(dirPath)

const dirs = fs.readdirSync(dirPath)
for (let dir of dirs) {
  watchPath(`${dirPath}/${dir}`)
  const subDirs = fs.readdirSync(`${dirPath}/${dir}`)
  for (let subDir of subDirs) {
    watchPath(`${dirPath}/${dir}/${subDir}`)
  }
}