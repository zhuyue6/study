import { Nav } from '@/types/nav'
import dirsList from '@/depend/nav/nav.config'
const bathUrl = '/'
let pId = 1
let cId = 1
let ccId = 1

const content:Array<Nav.BaseInfo> = dirsList

// 给nav分配index
for (let level1 of content) {
  level1.index = pId.toString()
  pId++
  level1.children?.forEach?.((level2)=>{
    level2.index = `${pId}-${cId}`
    cId++
    level2.children?.forEach?.((level3)=>{
      level3.index = `${pId}-${cId}-${ccId}`
      ccId++
    })
  })
}

export { bathUrl }
export default content