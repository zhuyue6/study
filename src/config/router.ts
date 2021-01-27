import { Nav } from '@/types/nav'
import Vue from 'vue'
import { AsyncComponent as VueComponent } from 'vue' 
import VueRouter, { RouteConfig } from 'vue-router'
import { nav } from './nav'
var  aaa  = nav
Vue.use(VueRouter)
const childrenRouterList: Nav.BaseInfo[] = []

for (let sub of nav.subList) {
  const subChildRouterList: Nav.BaseInfo[] = []
  for (let subChild of sub.children) {
    subChildRouterList.push({
      path: subChild.path,
      name: subChild.name,
      index: subChild.index,
      component: subChild.component,
      children: subChild.children
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
  component: <VueComponent>nav.main.component,
  children: childrenRouterList
}]
const router:VueRouter = new VueRouter({
  routes
})
export default router