import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { NavBaseInfo, MenuItem, nav } from './nav'
Vue.use(VueRouter)
const childrenRouterList: NavBaseInfo[] = []

for (let sub of nav.subList) {
  const subChildRouterList: MenuItem[] = []
  for (let subChild of sub.children) {
    subChildRouterList.push({
      path: subChild.path,
      name: subChild.name,
      index: subChild.index,
      component: subChild.component
    })
  }
  
  childrenRouterList.push({
    path: sub.path,
    name: sub.name,
    index: sub.index,
    component: sub.component,
    children: subChildRouterList
  })
}

const routes: Array<RouteConfig> = [{
  path: nav.main.path,
  component: nav.main.component,
  children: childrenRouterList
}]
const router:VueRouter = new VueRouter({
  routes
})
export default router