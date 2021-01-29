import { Nav } from '../../types/nav'
import fs = require('fs')
import path = require('path')
import { compile } from './util'
const mdsPath = './src/mds'
let dirsList:Nav.BaseInfo[] = []

dirsList = compile(mdsPath)

fs.writeFileSync(path.resolve(__dirname, '../../depend/nav/nav.config.ts'), `export default ${JSON.stringify(dirsList)}`, { encoding: 'utf8' })
// 把方法字符串转为方法即"()=>import(...)" 替换成 ()=>import(...)
fs.readFile(path.resolve(__dirname, '../../depend/nav/nav.config.ts'), {encoding: 'utf-8'}, (err, data)=>{
  const fnReg = /"\(\)\s*=>\s*import\('[^"]*'\)"/g
  const replaceData = data.replace(fnReg, (regData) => {
    return regData.replace(/"/g, '')
  })
  fs.writeFileSync(path.resolve(__dirname, '../../depend/nav/nav.config.ts'), replaceData, { encoding: 'utf8' })
})