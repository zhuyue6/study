import { Nav } from '../../types/nav'
import fs = require('fs')
const bathUrl = '@/src/mds'
const mdsPath = './src/mds'
const appPath = '/src/view/app.vue'
const dirs = fs.readdirSync(mdsPath)
const dirsList:Nav.BaseInfo[] = []
for (let dir of dirs) {
  const dirInfo = {
    name: dir,
    path: dir,
    component: `() => import('${appPath}')`,
    children: []
  }
  const subDirs = fs.readdirSync(`${mdsPath}/${dir}`)
  for (let subDir of subDirs) {
    const subDirInfo = {
      name: subDir,
      path: subDir, 
      component: `() => import('${appPath}')`,
      children: []
    }
    const files = fs.readdirSync(`${mdsPath}/${dir}/${subDir}`)
    for (let file of files) {
      const filename = file.split('.')[0]
      const fileInfo = {
        name: filename,
        path: filename,
        absolutePath: `/${dir}/${subDir}/${filename}`,
        component: `() => import('${bathUrl}/${dir}/${subDir}/${file}')`,
        children: []
      }
      subDirInfo.children.push(fileInfo)
    }
    dirInfo.children.push(subDirInfo)
  }
  dirsList.push(dirInfo)
}

fs.writeFileSync('./build/nav/nav.config.ts', `export default ${JSON.stringify(dirsList)}`, { encoding: 'utf8' })
// 把方法字符串转为方法即"()=>import(...)" 替换成 ()=>import(...)
fs.readFile('./build/nav/nav.config.ts', {encoding: 'utf-8'}, (err, data)=>{
  const fnReg = /"\(\)\s*=>\s*import\('[^"]*'\)"/g
  const replaceData = data.replace(fnReg, (regData) => {
    return regData.replace(/"/g, '')
  })
  fs.writeFileSync('./build/nav/nav.config.ts', replaceData, { encoding: 'utf8' })
})