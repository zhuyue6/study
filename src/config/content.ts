import { Nav } from '@/types/nav'

const bathUrl = '/'
let pId = 1
let cId = 1

const content:Array<Nav.NavBaseInfo> = [
  {
    name: '学习心得',
    path: 'study',
    component: () => import('@/view/study.vue'),
    children: [
      {
        name: 'typescript',
        path: 'typescript',
        absolutePath: `${bathUrl}study/typescript`,
        component: () => import('@/mds/typescript.md')
      },
      {
        name: 'vue',
        path: 'vue',
        absolutePath: `${bathUrl}study/vue`,
        component: () => import('@/mds/vue.md')
      },
      {
        name: 'performance',
        path: 'performance',
        absolutePath: `${bathUrl}study/performance`,
        component: () => import('@/mds/performance.md')
      },
      {
        name: 'webpack',
        path: 'webpack',
        absolutePath: `${bathUrl}study/webpack`,
        component: () => import('@/mds/webpack.md')
      }
    ]
  }
]

// 给nav分配index
for (let level1 of content) {
  level1.index = pId
  pId++
  level1.children?.forEach?.((level2)=>{
    level2.index = cId
    cId++
  })
}

export { bathUrl }
export default content