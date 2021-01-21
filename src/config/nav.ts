import { AsyncComponent as VueComponent } from 'vue' 

interface BaseInfo {
  path: string
  absolutePath?: string
  readonly name: string
  readonly index?: string
  component: VueComponent
}

export interface MenuItem extends BaseInfo {
  readonly class?: string
}

export interface NavBaseInfo extends BaseInfo {
  component: VueComponent
  children?: MenuItem[]
}

interface Nav {
  main: NavBaseInfo
  subList: NavBaseInfo[]
}

const bathUrl = '/'

export const nav:Nav = {
  main: {
    path: bathUrl,
    name: 'index',
    component: () => import('@/view/index.vue')
  },
  subList: [
    {
      name: '学习心得',
      path: 'study',
      index: '1',
      component: () => import('@/view/study.vue'),
      children: [
        {
          name: 'typescript',
          path: 'typescript',
          absolutePath: `${bathUrl}study/typescript`,
          component: () => import('@/mds/typescript.md'),
          index: '1'
        },
        {
          name: 'vue',
          path: 'vue',
          absolutePath: `${bathUrl}study/vue`,
          component: () => import('@/mds/vue.md'),
          index: '2'
        },
        {
          name: 'performance',
          path: 'performance',
          absolutePath: `${bathUrl}study/performance`,
          component: () => import('@/mds/performance.md'),
          index: '3'
        },
        {
          name: 'webpack',
          path: 'webpack',
          absolutePath: `${bathUrl}study/webpack`,
          component: () => import('@/mds/webpack.md'),
          index: '4'
        }
      ]
    }
  ]
}