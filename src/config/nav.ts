import { Nav } from '@/types/nav'
import content, { bathUrl } from './content'
export const nav:Nav.Config = {
  main: {
    path: bathUrl,
    name: 'index',
    component: () => import('@/view/index.vue')
  },
  subList: content
}