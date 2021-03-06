import { Nav } from '../../types/nav'
import fs = require('fs')
const baseUrl = '@/src/mds'
const appPath = '/src/view/app.vue'
const titleReg = /[0-9]{1,2}\./
function createDirRouter({dir, ID, parent}): Nav.BaseInfo {
  const index = parent ? `${parent.index}-${ID}` : ID.toString()
  const quotePath = parent ? `${parent.quotePath}/${dir}` : dir
  const absolutePath = parent ? `${parent.absolutePath}/${index}` : index
  return {
    type: 'dir',
    name: dir,
    path: index,
    index,
    absolutePath,
    quotePath,
    component: `() => import('${appPath}')`,
    children: []
  }
}

function createFileRouter({file, ID, parent}): Nav.BaseInfo {
  const filename = file.replace(/.[^\.]*$/, '')
  const index = parent ? `${parent.index}-${ID}` : ID.toString()
  const absolutePath = parent ? `${parent.absolutePath}/${index}` : index
  const quotePath = parent ? `${parent.quotePath}/${file}` : file
  return {
    type: 'file',
    name: filename,
    path: index,
    index,
    absolutePath: `/${absolutePath}`,
    component: `() => import('${baseUrl}/${quotePath}')`,
    children: []
  }
}

function isDir(path: string) {
  const stat = fs.statSync(path)
  return stat.isDirectory()
}

function isFile(path: string) {
  const stat = fs.statSync(path)
  return stat.isFile()
}

function sort(dirs: string[]) {
  dirs.sort((dir1, dir2)=>{
    const d1 = titleReg.exec(dir1)
    const d2 = titleReg.exec(dir2)
    return parseInt(d1[0]) - parseInt(d2[0])
  })
}

export function compile(path: string, parent?: Nav.BaseInfo): Nav.BaseInfo[] {
  let ID = 1
  const list = []
  const dirs = fs.readdirSync(path)
  sort(dirs)
  for (let dir of dirs) {
    let dirInfo = null
    let filePath = `${path}/${dir}`
    if (isDir(filePath)) {
      dirInfo = createDirRouter({dir, ID, parent})
      dirInfo.children = compile(filePath, dirInfo)
    } else if (isFile(filePath)) {
      dirInfo = createFileRouter({file: dir, ID, parent})
    }
    list.push(dirInfo)
    ID++
  }
  return list
}